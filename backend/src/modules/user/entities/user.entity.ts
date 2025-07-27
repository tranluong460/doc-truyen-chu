import { BaseEntity } from '@shared/entities'
import { Permission, Role } from '@shared/enums'
import { IPublicUser } from '@shared/types/user.types'
import { Field, HideField, ObjectType } from '@nestjs/graphql'
import {
  IsArray,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator'

@ObjectType({ description: 'Thông tin người dùng trong hệ thống' })
export class User extends BaseEntity implements IPublicUser {
  @Field(() => String, {
    nullable: true,
    description: 'Tên đầy đủ của người dùng',
  })
  @IsString()
  @IsOptional()
  @MinLength(2, { message: 'Tên phải có ít nhất 2 ký tự' })
  name: string | null

  @Field(() => String, {
    nullable: true,
    description: 'Địa chỉ của người dùng',
  })
  @IsOptional()
  @IsString()
  address: string | null

  @Field(() => String, { description: 'Email đăng nhập của người dùng' })
  @IsString()
  @IsEmail({}, { message: 'Email không hợp lệ' })
  email: string

  @Field(() => String, {
    description: 'Mật khẩu đã mã hóa (ẩn trong response)',
  })
  @HideField()
  @IsString()
  password: string

  @Field(() => [String], { description: 'Danh sách quyền của người dùng' })
  @IsArray()
  @IsEnum(Permission, { each: true, message: 'Quyền không hợp lệ' })
  permissions: Permission[] = []

  @Field(() => String, { description: 'Vai trò của người dùng trong hệ thống' })
  @IsEnum(Role, { message: 'Vai trò không hợp lệ' })
  role: Role
}
