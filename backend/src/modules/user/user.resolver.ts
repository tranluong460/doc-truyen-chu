import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { CurrentUserId } from '@decorators/current-user.decorator'
import { Permissions } from '@decorators/permissions.decorator'
import { Public } from '@decorators/public.decorator'
import { PermissionsGuard } from '@guards/permissions.guard'
import { Permission } from '@shared/enums'
import { LoggerService } from '@shared/services'

import { AdminUpdateUserPasswordInput } from '@modules/user/dto/admin-update-user-password.input'
import { CreateUserInput } from '@modules/user/dto/create-user.input'
import { UpdateUserInfoInput } from '@modules/user/dto/update-user-info.input'
import { UpdateUserPasswordInput } from '@modules/user/dto/update-user-password.input'
import { User } from '@modules/user/entities/user.entity'
import { UserService } from '@modules/user/user.service'
import { UserQueryDTO, UsersResponseDTO } from '@shared/dto/user.dto'

@Resolver(() => User)
@UseGuards(PermissionsGuard)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly logger: LoggerService,
  ) {}

  // * ===== API CÔNG KHAI =====
  @Public()
  @Mutation(() => User, { description: 'Đăng ký tài khoản mới (public)' })
  register(@Args('createUserInput') createUserInput: CreateUserInput) {
    this.logger.debug(
      `Thử đăng ký công khai cho email: ${createUserInput.email?.substring(0, 3)}***`,
      'UserResolver',
    )
    return this.userService.create(createUserInput)
  }

  // * ===== API DÀNH CHO ADMIN =====
  @Mutation(() => User, { description: 'Tạo user mới (admin only)' })
  @Permissions(Permission.CREATE_USER)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
    @CurrentUserId() currentUserId: string,
  ) {
    this.logger.debug(
      `Admin ${currentUserId} tạo user mới: ${createUserInput.email?.substring(0, 3)}***`,
      'UserResolver',
    )
    return this.userService.create(createUserInput)
  }

  @Mutation(() => User, { description: 'Xóa user (admin only)' })
  @Permissions(Permission.DELETE_USER)
  deleteUser(
    @Args('id', { type: () => String }) id: string,
    @CurrentUserId() currentUserId: string,
  ) {
    this.logger.warn(`Admin ${currentUserId} xóa user: ${id}`, 'UserResolver')
    return this.userService.remove(id)
  }

  @Query(() => UsersResponseDTO, {
    name: 'usersPaginated',
    description: 'Lấy danh sách users với pagination và filters (admin only)',
  })
  @Permissions(Permission.VIEW_ALL_USERS)
  async findAllPaginated(
    @Args('query', { type: () => UserQueryDTO, nullable: true })
    query?: UserQueryDTO,
  ) {
    const page = query?.page || 1
    const limit = query?.limit || 10
    const search = query?.search
    const sortBy = query?.sortBy || 'created_at'
    const sortOrder = query?.sortOrder || 'DESC'
    const filters = query?.filters

    const result = await this.userService.findAllPaginated(
      page,
      limit,
      search,
      sortBy,
      sortOrder,
      filters
        ? {
            role: filters.role,
            is_active: filters.is_active,
            permissions: filters.permissions,
            email: filters.email,
            name: filters.name,
          }
        : undefined,
    )

    return new UsersResponseDTO(
      result.users,
      result.pagination.currentPage,
      result.pagination.limit,
      result.pagination.total,
      `Tìm thấy ${result.users.length}/${result.pagination.total} users`,
    )
  }

  // * ===== API DÀNH CHO USER =====
  @Query(() => User, {
    name: 'user',
    description: 'Lấy thông tin user theo ID (chỉ của chính mình)',
  })
  @Permissions(Permission.READ_USER)
  findOne(@CurrentUserId() currentUserId: string) {
    return this.userService.findOne(currentUserId)
  }

  @Query(() => User, {
    name: 'userById',
    description: 'Lấy thông tin user theo ID (admin/manager only)',
  })
  @Permissions(Permission.VIEW_ALL_USERS)
  findOneById(@Args('id', { type: () => String }) id: string) {
    return this.userService.findOne(id)
  }

  @Mutation(() => User, { description: 'Cập nhật thông tin user' })
  @Permissions(Permission.UPDATE_USER_INFO)
  updateUserInfo(
    @Args('updateUserInfoInput') updateUserInfoInput: UpdateUserInfoInput,
    @CurrentUserId() currentUserId: string,
  ) {
    return this.userService.updateUserInfo(
      updateUserInfoInput.id,
      updateUserInfoInput,
      currentUserId,
    )
  }

  @Mutation(() => String, { description: 'Đổi mật khẩu user' })
  @Permissions(Permission.UPDATE_USER_PASSWORD)
  async updateUserPassword(
    @Args('updateUserPasswordInput')
    updateUserPasswordInput: UpdateUserPasswordInput,
    @CurrentUserId() currentUserId: string,
  ) {
    const result = await this.userService.updatePassword(
      currentUserId, // Chỉ cho phép thay đổi mật khẩu của chính mình
      updateUserPasswordInput,
      currentUserId,
    )
    return result.message
  }

  @Mutation(() => String, {
    description: 'Admin đổi mật khẩu cho user khác (admin only)',
  })
  @Permissions(Permission.ADMIN_UPDATE_PASSWORD)
  async adminUpdateUserPassword(
    @Args('adminUpdateUserPasswordInput')
    adminUpdateUserPasswordInput: AdminUpdateUserPasswordInput,
    @CurrentUserId() currentUserId: string,
  ) {
    const result = await this.userService.adminUpdatePassword(
      adminUpdateUserPasswordInput,
      currentUserId,
    )
    return result.message
  }

  // * ===== QUẢN LÝ QUYỀN & VAI TRÒ USER =====
  @Query(() => [String], { description: 'Lấy danh sách permissions của user' })
  @Permissions(Permission.READ_USER)
  findUserPermissions(@Args('id', { type: () => String }) id: string) {
    return this.userService.findUserPermission(id)
  }

  @Query(() => String, { description: 'Lấy role của user' })
  @Permissions(Permission.READ_USER)
  findUserRole(@Args('id', { type: () => String }) id: string) {
    return this.userService.findUserRole(id)
  }
}
