/**
 * User-specific DTO classes sử dụng base DTOs
 *
 * Consolidate tất cả User DTOs để tránh duplication
 */

import { User } from '@modules/user/entities/user.entity'
import { Field, InputType, ObjectType } from '@nestjs/graphql'
import {
  IsCurrentPassword,
  IsStrongPassword,
  IsUserAddress,
  IsUserId,
  IsUserName,
  IsValidEmail,
} from '@shared/decorators/validation.decorators'
import {
  BaseInputDTO,
  BaseResponseDTO,
  BaseUpdateInputDTO,
  PaginatedResponseDTO,
} from '@shared/dto/base.dto'
import { Permission, Role } from '@shared/enums'

/**
 * Create User Input DTO
 */
@InputType('CreateUserInput', { description: 'Dữ liệu tạo người dùng mới' })
export class CreateUserDTO extends BaseInputDTO {
  @IsUserName('Tên đầy đủ của người dùng', true)
  name: string | null

  @IsUserAddress('Địa chỉ của người dùng')
  address: string | null

  @IsValidEmail('Email đăng nhập của người dùng')
  email: string

  @IsStrongPassword('Mật khẩu đăng nhập')
  password: string

  @Field(() => String, {
    defaultValue: Role.USER,
    description: 'Vai trò của người dùng',
  })
  role: Role = Role.USER

  @Field(() => [String], {
    defaultValue: [],
    description: 'Danh sách quyền bổ sung',
  })
  permissions: Permission[] = []
}

/**
 * Update User Info Input DTO
 */
@InputType('UpdateUserInfoInput', {
  description: 'Dữ liệu cập nhật thông tin người dùng',
})
export class UpdateUserInfoDTO extends BaseUpdateInputDTO {
  @IsUserName('Tên đầy đủ của người dùng', true)
  name?: string | null

  @IsUserAddress('Địa chỉ của người dùng')
  address?: string | null

  @IsValidEmail('Email của người dùng')
  email?: string

  @Field(() => String, {
    nullable: true,
    description: 'Vai trò của người dùng',
  })
  role?: Role

  @Field(() => [String], {
    nullable: true,
    description: 'Danh sách quyền',
  })
  permissions?: Permission[]
}

/**
 * Update User Password Input DTO
 */
@InputType('UpdateUserPasswordInput', {
  description: 'Dữ liệu đổi mật khẩu người dùng',
})
export class UpdateUserPasswordDTO extends BaseInputDTO {
  @IsUserId('ID của người dùng')
  userId: string

  @IsCurrentPassword('Mật khẩu hiện tại')
  current_password: string

  @IsStrongPassword('Mật khẩu mới')
  new_password: string
}

/**
 * Admin Update User Password Input DTO
 */
@InputType('AdminUpdateUserPasswordInput', {
  description: 'Dữ liệu admin đổi mật khẩu cho user khác',
})
export class AdminUpdateUserPasswordDTO extends BaseInputDTO {
  @IsUserId('ID của user cần đổi mật khẩu')
  userId: string

  @IsStrongPassword('Mật khẩu mới')
  new_password: string
}

/**
 * User Filter Input DTO
 */
@InputType('UserFilterInput', { description: 'Bộ lọc tìm kiếm user' })
export class UserFilterDTO extends BaseInputDTO {
  @Field(() => String, {
    nullable: true,
    description: 'Email để filter',
  })
  email?: string

  @Field(() => String, {
    nullable: true,
    description: 'Tên để filter',
  })
  name?: string

  @Field(() => String, {
    nullable: true,
    description: 'Vai trò để filter',
  })
  role?: Role

  @Field(() => Boolean, {
    nullable: true,
    description: 'Trạng thái active để filter',
  })
  is_active?: boolean

  @Field(() => [String], {
    nullable: true,
    description: 'Quyền để filter',
  })
  permissions?: Permission[]
}

/**
 * User Query Input DTO (với pagination và filter)
 */
@InputType('UserQueryInput', {
  description: 'Query parameters cho danh sách user',
})
export class UserQueryDTO extends BaseInputDTO {
  @Field(() => Number, {
    defaultValue: 1,
    description: 'Số trang',
  })
  page: number = 1

  @Field(() => Number, {
    defaultValue: 10,
    description: 'Số items per page',
  })
  limit: number = 10

  @Field(() => String, {
    nullable: true,
    description: 'Từ khóa tìm kiếm',
  })
  search?: string

  @Field(() => String, {
    nullable: true,
    description: 'Field để sort',
  })
  sortBy?: string

  @Field(() => String, {
    defaultValue: 'DESC',
    description: 'Thứ tự sort',
  })
  sortOrder: 'ASC' | 'DESC' = 'DESC'

  @Field(() => UserFilterDTO, {
    nullable: true,
    description: 'Bộ lọc chi tiết',
  })
  filters?: UserFilterDTO
}

/**
 * User Response DTO
 */
@ObjectType('UserResponse', { description: 'Response khi tạo/cập nhật user' })
export class UserResponseDTO extends BaseResponseDTO {
  @Field(() => User, {
    nullable: true,
    description: 'Thông tin user',
  })
  user?: User

  constructor(user?: User, message?: string) {
    super()
    this.success = !!user
    this.user = user
    this.message = message
  }
}

/**
 * Users List Response DTO
 */
@ObjectType('UsersResponse', {
  description: 'Response danh sách users với pagination',
})
export class UsersResponseDTO extends PaginatedResponseDTO<User> {
  @Field(() => [User], { description: 'Danh sách users' })
  data: User[]

  constructor(
    users: User[],
    page: number,
    limit: number,
    total: number,
    message?: string,
  ) {
    super(users, page, limit, total, message)
    this.data = users
  }
}

/**
 * User Stats DTO
 */
@ObjectType('UserStats', { description: 'Thống kê user' })
export class UserStatsDTO {
  @Field(() => Number, { description: 'Tổng số user' })
  total: number

  @Field(() => Number, { description: 'Số user active' })
  active: number

  @Field(() => Number, { description: 'Số user inactive' })
  inactive: number

  @Field(() => Number, { description: 'Số admin' })
  admins: number

  @Field(() => Number, { description: 'Số manager' })
  managers: number

  @Field(() => Number, { description: 'Số staff' })
  staff: number

  @Field(() => Number, { description: 'Số user thường' })
  users: number

  constructor(stats: Partial<UserStatsDTO>) {
    Object.assign(this, stats)
  }
}
