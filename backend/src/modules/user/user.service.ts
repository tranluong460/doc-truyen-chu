import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import * as bcrypt from 'bcrypt'

import appConfig from '@config/app.config'
import { DatabaseService } from '@modules/database/database.service'
import { AdminUpdateUserPasswordInput } from '@modules/user/dto/admin-update-user-password.input'
import { CreateUserInput } from '@modules/user/dto/create-user.input'
import { UpdateUserInfoInput } from '@modules/user/dto/update-user-info.input'
import { UpdateUserPasswordInput } from '@modules/user/dto/update-user-password.input'
import { Permission, Role } from '@shared/enums'
import { LoggerService, PaginationService } from '@shared/services'
import {
  FilterConfig,
  PaginationOptions,
  SearchConfig,
} from '@shared/services/pagination.service'
import {
  getCurrentPostgresTimestamp,
  IUser,
  validateId,
  validatePasswordStrength,
} from '@shared/utils'
import { SecurityValidator } from '@shared/validators/security.validator'

@Injectable()
export class UserService {
  private readonly BLOCKED_EMAILS = [
    'admin@admin.com',
    'test@test.com',
    'user@user.com',
  ]
  private readonly EMAIL_REGEX =
    /^[a-zA-Z0-9]([a-zA-Z0-9._-])*[a-zA-Z0-9]@[a-zA-Z0-9]([a-zA-Z0-9.-])*[a-zA-Z0-9]\.[a-zA-Z]{2,}$/

  constructor(
    private readonly databaseService: DatabaseService,
    private readonly logger: LoggerService,
    private readonly paginationService: PaginationService,
    @Inject(appConfig.KEY)
    private readonly appConfigService: ConfigType<typeof appConfig>,
  ) {}

  // ==================== PRIVATE HELPER METHODS ====================
  /**
   * Hash password với bcrypt
   * @param password - Mật khẩu cần hash
   * @returns Promise<string> - Mật khẩu đã hash
   */
  private async hashPassword(password: string): Promise<string> {
    if (!password) {
      throw new BadRequestException('Mật khẩu là bắt buộc')
    }

    // * Kiểm tra độ mạnh của mật khẩu
    const passwordValidation = validatePasswordStrength(password)
    if (!passwordValidation.isValid) {
      throw new BadRequestException(
        `Mật khẩu không đủ mạnh: ${passwordValidation.feedback.join(', ')}`,
      )
    }

    return bcrypt.hash(password, this.appConfigService.bcryptSaltRounds)
  }

  /**
   * So sánh password với hash
   * @param password - Mật khẩu cần kiểm tra
   * @param hash - Hash để so sánh
   * @returns Promise<boolean> - Kết quả so sánh
   */
  private async validatePassword(
    password: string,
    hash: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hash)
  }

  /**
   * Validate và chuẩn hóa email
   */
  private normalizeAndValidateEmail(email: string): string {
    this.logger.debug(
      `Validating email: ${email?.substring(0, 3)}***`,
      'UserService',
    )

    if (!email) {
      this.logger.warn('Xác thực email thất bại: email trống', 'UserService')
      throw new BadRequestException('Email là bắt buộc')
    }

    const normalizedEmail = email.trim().toLowerCase()

    if (!this.EMAIL_REGEX.test(normalizedEmail)) {
      this.logger.warn(
        `Xác thực email thất bại: định dạng không hợp lệ cho ${normalizedEmail.substring(0, 3)}***`,
        'UserService',
      )
      throw new BadRequestException('Email không hợp lệ')
    }

    if (this.BLOCKED_EMAILS.includes(normalizedEmail)) {
      this.logger.warn(
        `Xác thực email thất bại: email bị chặn ${normalizedEmail}`,
        'UserService',
      )
      throw new BadRequestException('Email này không được phép sử dụng')
    }

    this.logger.debug('Xác thực email thành công', 'UserService')
    return normalizedEmail
  }

  /**
   * Kiểm tra quyền truy cập
   */
  private async validateUserAccess(
    currentUserId: string,
    targetUserId: string,
    requiredRoles: Role[] = [Role.ADMIN, Role.MANAGER],
  ): Promise<void> {
    if (currentUserId === targetUserId) {
      this.logger.debug('User truy cập dữ liệu của chính mình', 'UserService')
      return
    }

    const currentUser = await this.findOne(currentUserId)
    if (!requiredRoles.includes(currentUser.role)) {
      this.logger.warn(
        `Từ chối truy cập: User ${currentUserId} (${currentUser.role}) thử truy cập user ${targetUserId}`,
        'UserService',
      )
      throw new BadRequestException('Bạn không có quyền thực hiện thao tác này')
    }

    this.logger.info(
      `Truy cập Admin/Manager: ${currentUserId} (${currentUser.role}) truy cập user ${targetUserId}`,
      'UserService',
    )
  }

  /**
   * Sanitize input data
   */
  private sanitizeUserInput(
    input: CreateUserInput | UpdateUserInfoInput,
  ): void {
    if (input.name) {
      input.name = SecurityValidator.sanitizeInput(input.name)
    }
    if (input.address) {
      input.address = SecurityValidator.sanitizeInput(input.address)
    }
  }

  // ==================== PUBLIC CRUD METHODS ====================
  /**
   * Tạo user mới
   */
  async create(createUserInput: CreateUserInput) {
    this.logger.info('Tạo user mới', 'UserService')

    // Validate và sanitize input
    this.sanitizeUserInput(createUserInput)

    if (!createUserInput.password || !createUserInput.email) {
      this.logger.warn(
        'Tạo user thất bại: thiếu các trường bắt buộc',
        'UserService',
      )
      throw new BadRequestException('Mật khẩu và email là bắt buộc')
    }

    const normalizedEmail = this.normalizeAndValidateEmail(
      createUserInput.email,
    )

    // Kiểm tra email đã tồn tại
    const { data: existingUser, error: checkError } = await this.databaseService
      .getClient()
      .from('users')
      .select('id')
      .eq('email', normalizedEmail)
      .maybeSingle()

    if (checkError) {
      this.logger.error(
        `Lỗi khi kiểm tra email tồn tại: ${checkError.message}`,
        checkError,
        'UserService',
      )
      throw new BadRequestException('Lỗi khi kiểm tra email')
    }

    if (existingUser) {
      this.logger.warn(
        `Tạo user thất bại: email ${normalizedEmail} đã tồn tại`,
        'UserService',
      )
      throw new BadRequestException('Email đã tồn tại')
    }

    const hashedPassword = await this.hashPassword(createUserInput.password)

    const { data, error } = await this.databaseService
      .getClient()
      .from('users')
      .insert([
        {
          ...createUserInput,
          email: normalizedEmail,
          password: hashedPassword,
          permissions: [Permission.READ_USER],
          role: Role.USER,
        },
      ])
      .select()

    if (error) {
      this.logger.error(
        `User creation failed: ${error.message}`,
        error,
        'UserService',
      )
      throw new BadRequestException(
        `Tạo người dùng thất bại: ${error.message || 'Lỗi không xác định'}`,
      )
    }

    this.logger.info(`Tạo user thành công: ${data[0].id}`, 'UserService')
    return data[0]
  }

  /**
   * Lấy danh sách users với pagination và filters - sử dụng PaginationService
   */
  async findAllPaginated(
    page: number = 1,
    limit: number = 10,
    search?: string,
    sortBy: string = 'created_at',
    sortOrder: 'ASC' | 'DESC' = 'DESC',
    filters?: {
      role?: Role
      is_active?: boolean
      permissions?: Permission[]
      email?: string
      name?: string
    },
  ) {
    // Cấu hình pagination options
    const paginationOptions: PaginationOptions<IUser> = {
      tableName: 'users',
      selectFields: '*',
      defaultSortBy: 'created_at',
      defaultSortOrder: 'DESC',
      validSortFields: ['created_at', 'updated_at', 'email', 'name', 'role'],
      defaultFilters: {
        is_active: this.appConfigService.userStatus.active,
      },
      maxLimit: 100,
    }

    // Build filters từ input
    const filterConfigs: FilterConfig[] = []

    // Override default filter nếu is_active được specify explicitly
    if (filters?.is_active !== undefined) {
      // Remove default filter và add explicit filter
      paginationOptions.defaultFilters = {}
      filterConfigs.push({
        field: 'is_active',
        operator: 'eq',
        value: filters.is_active,
      })
    }

    if (filters?.role) {
      filterConfigs.push({
        field: 'role',
        operator: 'eq',
        value: filters.role,
      })
    }

    if (filters?.email) {
      filterConfigs.push({
        field: 'email',
        operator: 'ilike',
        value: filters.email,
      })
    }

    if (filters?.name) {
      filterConfigs.push({
        field: 'name',
        operator: 'ilike',
        value: filters.name,
      })
    }

    if (filters?.permissions && filters.permissions.length > 0) {
      filterConfigs.push({
        field: 'permissions',
        operator: 'contains',
        value: filters.permissions,
      })
    }

    // Build search config
    const searchConfig: SearchConfig | undefined = search
      ? {
          fields: ['email', 'name'],
          value: search,
        }
      : undefined

    // Pagination input
    const paginationInput = {
      page,
      limit,
      sortBy,
      sortOrder,
      search,
    }

    // Sử dụng PaginationService
    const result = await this.paginationService.paginate<IUser>(
      paginationOptions,
      paginationInput,
      filterConfigs,
      searchConfig,
    )

    // Convert response format để match existing interface
    return {
      users: result.data,
      pagination: result.pagination,
    }
  }

  /**
   * Tìm user theo ID
   */
  async findOne(id: string) {
    this.logger.debug(`Tìm user theo ID: ${id}`, 'UserService')

    try {
      validateId(id)
      SecurityValidator.validateUuid(id)

      const { data, error } = await this.databaseService
        .getClient()
        .from('users')
        .select('*')
        .eq('id', id)
        .eq('is_active', this.appConfigService.userStatus.active)
        .single()

      if (error || !data) {
        this.logger.warn(`Không tìm thấy user: ${id}`, 'UserService')
        throw new NotFoundException(`Không tìm thấy người dùng với id ${id}`)
      }

      this.logger.debug(`Tìm thấy user: ${id}`, 'UserService')
      return data
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error
      }
      this.logger.error(`Lỗi khi tìm user ${id}`, error as Error, 'UserService')
      throw new NotFoundException(`Không tìm thấy người dùng với id ${id}`)
    }
  }

  /**
   * Cập nhật thông tin user
   */
  async updateUserInfo(
    id: string,
    updateUserInfoInput: UpdateUserInfoInput,
    currentUserId?: string,
  ) {
    this.logger.info(`Cập nhật thông tin user: ${id}`, 'UserService')

    validateId(id)
    SecurityValidator.validateUuid(id)

    this.sanitizeUserInput(updateUserInfoInput)

    // Kiểm tra quyền truy cập
    if (currentUserId) {
      await this.validateUserAccess(currentUserId, id)
    }

    // Xử lý email nếu có thay đổi
    if (updateUserInfoInput.email) {
      updateUserInfoInput.email = this.normalizeAndValidateEmail(
        updateUserInfoInput.email,
      )

      const { data: existingUser, error: emailCheckError } =
        await this.databaseService
          .getClient()
          .from('users')
          .select('id')
          .eq('email', updateUserInfoInput.email)
          .neq('id', id)
          .maybeSingle()

      if (emailCheckError) {
        this.logger.error(
          `Lỗi khi kiểm tra email tồn tại trong update: ${emailCheckError.message}`,
          emailCheckError,
          'UserService',
        )
        throw new BadRequestException('Lỗi khi kiểm tra email')
      }

      if (existingUser) {
        this.logger.warn(
          `Cập nhật thất bại: email ${updateUserInfoInput.email} đã tồn tại`,
          'UserService',
        )
        throw new BadRequestException('Email đã tồn tại')
      }
    }

    const { data, error } = await this.databaseService
      .getClient()
      .from('users')
      .update({
        ...updateUserInfoInput,
        updated_at: getCurrentPostgresTimestamp(),
      })
      .eq('id', id)
      .eq('is_active', this.appConfigService.userStatus.active)
      .select()

    if (error || !data?.length) {
      this.logger.error(
        `Thất bại khi cập nhật user ${id}`,
        error instanceof Error ? error : new Error(String(error)),
        'UserService',
      )
      throw error
        ? new BadRequestException(
            `Cập nhật người dùng thất bại: ${error.message}`,
          )
        : new NotFoundException(`Không tìm thấy người dùng với id ${id}`)
    }

    this.logger.info(`Cập nhật user ${id} thành công`, 'UserService')
    return data[0]
  }

  /**
   * Xóa user (soft delete)
   */
  async remove(id: string) {
    this.logger.warn(`Soft delete user: ${id}`, 'UserService')

    validateId(id)
    SecurityValidator.validateUuid(id)

    await this.findOne(id) // Xác nhận user tồn tại

    const { data, error } = await this.databaseService
      .getClient()
      .from('users')
      .update({
        is_active: false,
        updated_at: getCurrentPostgresTimestamp(),
      })
      .eq('id', id)
      .select()

    if (error || !data?.length) {
      this.logger.error(
        `Thất bại khi xóa user ${id}`,
        error instanceof Error ? error : new Error(String(error)),
        'UserService',
      )
      throw error
        ? new BadRequestException(`Xóa người dùng thất bại: ${error.message}`)
        : new NotFoundException(`Không tìm thấy người dùng với id ${id}`)
    }

    this.logger.warn(`Soft delete user ${id} thành công`, 'UserService')
    return data[0]
  }

  // ==================== PASSWORD MANAGEMENT ====================
  /**
   * Cập nhật mật khẩu user (cần mật khẩu cũ)
   */
  async updatePassword(
    id: string,
    input: UpdateUserPasswordInput,
    currentUserId?: string,
  ) {
    this.logger.info(`Yêu cầu đổi mật khẩu cho user: ${id}`, 'UserService')

    // Kiểm tra quyền: chỉ admin hoặc chính chủ
    if (currentUserId) {
      await this.validateUserAccess(currentUserId, id, [Role.ADMIN])
    }

    const user = await this.findOne(id)
    if (!user.password) {
      this.logger.warn(
        `Cập nhật mật khẩu thất bại: user ${id} chưa có mật khẩu`,
        'UserService',
      )
      throw new BadRequestException('Người dùng chưa có mật khẩu')
    }

    // Xác minh mật khẩu hiện tại
    const isValid = await this.validatePassword(
      input.current_password,
      user.password,
    )
    if (!isValid) {
      this.logger.warn(
        `Cập nhật mật khẩu thất bại: mật khẩu hiện tại sai cho user ${id}`,
        'UserService',
      )
      throw new BadRequestException('Mật khẩu hiện tại không đúng')
    }

    // Kiểm tra mật khẩu mới khác cũ
    if (input.current_password === input.new_password) {
      this.logger.warn(
        `Cập nhật mật khẩu thất bại: mật khẩu mới giống hiện tại cho user ${id}`,
        'UserService',
      )
      throw new BadRequestException('Mật khẩu mới phải khác mật khẩu hiện tại')
    }

    const hashedPassword = await this.hashPassword(input.new_password)

    const { error } = await this.databaseService
      .getClient()
      .from('users')
      .update({
        password: hashedPassword,
        updated_at: getCurrentPostgresTimestamp(),
      })
      .eq('id', id)
      .eq('is_active', this.appConfigService.userStatus.active)
      .select()

    if (error) {
      this.logger.error(
        `Cập nhật mật khẩu thất bại cho user ${id}`,
        error,
        'UserService',
      )
      throw new BadRequestException(`Đổi mật khẩu thất bại: ${error.message}`)
    }

    this.logger.info(
      `Cập nhật mật khẩu thành công cho user ${id}`,
      'UserService',
    )
    return { message: 'Mật khẩu đã được thay đổi thành công' }
  }

  /**
   * Admin đổi mật khẩu cho user khác (không cần mật khẩu cũ)
   * @param input - Dữ liệu đổi mật khẩu
   * @param currentUserId - ID của admin hiện tại
   * @returns Promise<{message: string}> - Kết quả cập nhật
   */
  async adminUpdatePassword(
    input: AdminUpdateUserPasswordInput,
    currentUserId: string,
  ) {
    this.logger.warn(
      `Yêu cầu reset mật khẩu bởi admin: ${currentUserId} -> ${input.userId}`,
      'UserService',
    )

    const currentUser = await this.findOne(currentUserId)
    if (currentUser.role !== Role.ADMIN) {
      this.logger.debug(
        `User không phải admin ${currentUserId} thử reset mật khẩu admin`,
        'UserService',
      )
      throw new BadRequestException(
        'Chỉ admin mới có quyền thay đổi mật khẩu cho user khác',
      )
    }

    const targetUser = await this.findOne(input.userId)

    // Bảo vệ admin không bị admin khác thay đổi password
    if (targetUser.role === Role.ADMIN && currentUserId !== input.userId) {
      this.logger.debug(
        `Admin ${currentUserId} thử thay đổi mật khẩu của admin khác ${input.userId}`,
        'UserService',
      )
      throw new BadRequestException(
        'Không thể thay đổi mật khẩu của admin khác',
      )
    }

    const hashedPassword = await this.hashPassword(input.new_password)

    const { error } = await this.databaseService
      .getClient()
      .from('users')
      .update({
        password: hashedPassword,
        updated_at: getCurrentPostgresTimestamp(),
      })
      .eq('id', input.userId)
      .eq('is_active', this.appConfigService.userStatus.active)
      .select()

    if (error) {
      this.logger.error(
        `Reset mật khẩu bởi admin thất bại: ${input.userId}`,
        error,
        'UserService',
      )
      throw new BadRequestException(`Đổi mật khẩu thất bại: ${error.message}`)
    }

    this.logger.warn(
      `Admin ${currentUserId} reset mật khẩu thành công cho user ${input.userId} (${targetUser.role})`,
      'UserService',
    )
    return { message: 'Mật khẩu đã được thay đổi thành công bởi admin' }
  }

  // ==================== USER PERMISSIONS & ROLES ====================
  /**
   * Lấy danh sách permissions của user
   */
  async findUserPermission(id: string): Promise<Permission[]> {
    this.logger.debug(`Lấy quyền cho user: ${id}`, 'UserService')
    const user = await this.findOne(id)
    return user.permissions || []
  }

  /**
   * Lấy role của user
   */
  async findUserRole(id: string): Promise<Role> {
    this.logger.debug(`Lấy vai trò cho user: ${id}`, 'UserService')
    const user = await this.findOne(id)
    return user.role
  }
}
