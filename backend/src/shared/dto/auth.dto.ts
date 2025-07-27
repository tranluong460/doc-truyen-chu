/**
 * Auth-specific DTO classes sử dụng base DTOs
 *
 * Consolidate tất cả Auth DTOs để tránh duplication
 */

import { Field, InputType, ObjectType } from '@nestjs/graphql'
import {
  IsValidEmail,
  IsValidString,
} from '@shared/decorators/validation.decorators'
import { BaseInputDTO, BaseResponseDTO } from '@shared/dto/base.dto'
import { Permission, Role } from '@shared/enums'

/**
 * Login Input DTO
 */
@InputType('LoginInput', { description: 'Dữ liệu đăng nhập' })
export class LoginDTO extends BaseInputDTO {
  @IsValidEmail('Email đăng nhập')
  email: string

  @IsValidString('Mật khẩu đăng nhập')
  password: string
}

/**
 * User Info for Auth Response
 */
@ObjectType('UserType', { description: 'Thông tin user trong auth response' })
export class AuthUserDTO {
  @Field(() => String, { description: 'ID của user' })
  id: string

  @Field(() => String, { description: 'Email của user' })
  email: string

  @Field(() => String, {
    nullable: true,
    description: 'Tên của user',
  })
  name: string | null

  @Field(() => String, { description: 'Vai trò của user' })
  role: Role

  @Field(() => [String], { description: 'Danh sách quyền' })
  permissions: Permission[]
}

/**
 * Auth Response DTO
 */
@ObjectType('AuthResponse', {
  description: 'Response sau khi đăng nhập thành công',
})
export class AuthResponseDTO extends BaseResponseDTO {
  @Field(() => String, { description: 'JWT access token' })
  access_token: string

  @Field(() => String, { description: 'JWT refresh token' })
  refresh_token: string

  @Field(() => AuthUserDTO, { description: 'Thông tin user' })
  user: AuthUserDTO

  constructor(
    access_token: string,
    refresh_token: string,
    user: AuthUserDTO,
    message?: string,
  ) {
    super()
    this.success = true
    this.access_token = access_token
    this.refresh_token = refresh_token
    this.user = user
    this.message = message
  }
}

/**
 * Refresh Token Input DTO
 */
@InputType({ description: 'Dữ liệu refresh token' })
export class RefreshTokenDTO extends BaseInputDTO {
  @Field(() => String, { description: 'Refresh token' })
  refresh_token: string
}

/**
 * Logout Input DTO
 */
@InputType({ description: 'Dữ liệu đăng xuất' })
export class LogoutDTO extends BaseInputDTO {
  @Field(() => String, {
    nullable: true,
    description: 'Access token để revoke',
  })
  access_token?: string

  @Field(() => String, {
    nullable: true,
    description: 'Refresh token để revoke',
  })
  refresh_token?: string
}

/**
 * Token Validation Response DTO
 */
@ObjectType({ description: 'Response validation token' })
export class TokenValidationDTO extends BaseResponseDTO {
  @Field(() => Boolean, { description: 'Token có hợp lệ không' })
  isValid: boolean

  @Field(() => AuthUserDTO, {
    nullable: true,
    description: 'Thông tin user nếu token hợp lệ',
  })
  user?: AuthUserDTO

  @Field(() => String, {
    nullable: true,
    description: 'Thời gian hết hạn token',
  })
  expiresAt?: string

  constructor(
    isValid: boolean,
    user?: AuthUserDTO,
    expiresAt?: string,
    message?: string,
  ) {
    super()
    this.success = isValid
    this.isValid = isValid
    this.user = user
    this.expiresAt = expiresAt
    this.message = message
  }
}
