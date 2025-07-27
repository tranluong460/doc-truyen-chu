/**
 * Custom validation decorators để tái sử dụng validation logic
 *
 * Tập trung tất cả validation decorators phổ biến để tránh duplication
 * và đảm bảo consistency across toàn bộ ứng dụng
 */

import { applyDecorators } from '@nestjs/common'
import { Field } from '@nestjs/graphql'
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  MinLength,
  MaxLength,
  Matches,
  IsNotIn,
  IsUUID,
} from 'class-validator'
import {
  VALIDATION_CONSTANTS,
  VALIDATION_MESSAGES,
  GRAPHQL_DESCRIPTIONS,
} from '@shared/constants/validation.constants'

/**
 * Decorator cho strong password validation
 *
 * Áp dụng tất cả validation rules cho password:
 * - String type check
 * - Not empty
 * - Min/Max length
 * - Pattern matching (uppercase, lowercase, number, special char)
 *
 * @param fieldDescription - Mô tả field cho GraphQL
 */
export function IsStrongPassword(fieldDescription?: string) {
  return applyDecorators(
    Field(() => String, {
      description: fieldDescription || GRAPHQL_DESCRIPTIONS.AUTH.NEW_PASSWORD,
    }),
    IsString({ message: VALIDATION_MESSAGES.REQUIRED.STRING('Mật khẩu') }),
    IsNotEmpty({ message: VALIDATION_MESSAGES.REQUIRED.NOT_EMPTY('Mật khẩu') }),
    MinLength(VALIDATION_CONSTANTS.PASSWORD.MIN_LENGTH, {
      message: VALIDATION_MESSAGES.LENGTH.MIN(
        'Mật khẩu',
        VALIDATION_CONSTANTS.PASSWORD.MIN_LENGTH,
      ),
    }),
    MaxLength(VALIDATION_CONSTANTS.PASSWORD.MAX_LENGTH, {
      message: VALIDATION_MESSAGES.LENGTH.MAX(
        'Mật khẩu',
        VALIDATION_CONSTANTS.PASSWORD.MAX_LENGTH,
      ),
    }),
    Matches(VALIDATION_CONSTANTS.PASSWORD.PATTERN, {
      message: VALIDATION_MESSAGES.PASSWORD.STRENGTH,
    }),
  )
}

/**
 * Decorator cho email validation với blocked emails check
 *
 * Áp dụng tất cả validation rules cho email:
 * - Email format validation
 * - Not empty check
 * - Max length check
 * - Blocked emails check
 *
 * @param fieldDescription - Mô tả field cho GraphQL
 */
export function IsValidEmail(fieldDescription?: string) {
  return applyDecorators(
    Field(() => String, {
      description: fieldDescription || GRAPHQL_DESCRIPTIONS.USER.EMAIL,
    }),
    IsEmail({}, { message: VALIDATION_MESSAGES.EMAIL.INVALID }),
    IsNotEmpty({ message: VALIDATION_MESSAGES.REQUIRED.NOT_EMPTY('Email') }),
    MaxLength(VALIDATION_CONSTANTS.EMAIL.MAX_LENGTH, {
      message: VALIDATION_MESSAGES.LENGTH.MAX(
        'Email',
        VALIDATION_CONSTANTS.EMAIL.MAX_LENGTH,
      ),
    }),
    IsNotIn(VALIDATION_CONSTANTS.EMAIL.BLOCKED_EMAILS, {
      message: VALIDATION_MESSAGES.EMAIL.BLOCKED,
    }),
  )
}

/**
 * Decorator cho user ID validation
 *
 * Áp dụng validation cho UUID format:
 * - String type check
 * - Not empty
 * - UUID v4 format validation
 *
 * @param fieldDescription - Mô tả field cho GraphQL
 */
export function IsUserId(fieldDescription?: string) {
  return applyDecorators(
    Field(() => String, {
      description: fieldDescription || GRAPHQL_DESCRIPTIONS.USER.ID,
    }),
    IsString({ message: VALIDATION_MESSAGES.REQUIRED.STRING('ID') }),
    IsNotEmpty({ message: VALIDATION_MESSAGES.REQUIRED.NOT_EMPTY('ID') }),
    IsUUID('4', { message: VALIDATION_MESSAGES.REQUIRED.UUID }),
  )
}

/**
 * Decorator cho user name validation
 *
 * Áp dụng validation cho tên người dùng:
 * - String type check
 * - Optional/required check
 * - Min/Max length validation
 *
 * @param fieldDescription - Mô tả field cho GraphQL
 * @param isOptional - Có cho phép null/undefined không
 */
export function IsUserName(fieldDescription?: string, isOptional = false) {
  const decorators = [
    Field(() => String, {
      nullable: isOptional,
      description: fieldDescription || GRAPHQL_DESCRIPTIONS.USER.NAME,
    }),
    IsString({ message: VALIDATION_MESSAGES.REQUIRED.STRING('Tên') }),
    MinLength(VALIDATION_CONSTANTS.NAME.MIN_LENGTH, {
      message: VALIDATION_MESSAGES.LENGTH.MIN(
        'Tên',
        VALIDATION_CONSTANTS.NAME.MIN_LENGTH,
      ),
    }),
    MaxLength(VALIDATION_CONSTANTS.NAME.MAX_LENGTH, {
      message: VALIDATION_MESSAGES.LENGTH.MAX(
        'Tên',
        VALIDATION_CONSTANTS.NAME.MAX_LENGTH,
      ),
    }),
  ]

  if (isOptional) {
    decorators.push(IsOptional())
  } else {
    decorators.push(
      IsNotEmpty({ message: VALIDATION_MESSAGES.REQUIRED.NOT_EMPTY('Tên') }),
    )
  }

  return applyDecorators(...decorators)
}

/**
 * Decorator cho address validation
 *
 * Áp dụng validation cho địa chỉ:
 * - String type check
 * - Optional field
 * - Min/Max length validation
 *
 * @param fieldDescription - Mô tả field cho GraphQL
 */
export function IsUserAddress(fieldDescription?: string) {
  return applyDecorators(
    Field(() => String, {
      nullable: true,
      description: fieldDescription || GRAPHQL_DESCRIPTIONS.USER.ADDRESS,
    }),
    IsOptional(),
    IsString({ message: VALIDATION_MESSAGES.REQUIRED.STRING('Địa chỉ') }),
    MinLength(VALIDATION_CONSTANTS.ADDRESS.MIN_LENGTH, {
      message: VALIDATION_MESSAGES.LENGTH.MIN(
        'Địa chỉ',
        VALIDATION_CONSTANTS.ADDRESS.MIN_LENGTH,
      ),
    }),
    MaxLength(VALIDATION_CONSTANTS.ADDRESS.MAX_LENGTH, {
      message: VALIDATION_MESSAGES.LENGTH.MAX(
        'Địa chỉ',
        VALIDATION_CONSTANTS.ADDRESS.MAX_LENGTH,
      ),
    }),
  )
}

/**
 * Decorator cho current password validation (đơn giản hơn strong password)
 *
 * Chỉ check basic requirements cho current password:
 * - String type check
 * - Not empty
 *
 * @param fieldDescription - Mô tả field cho GraphQL
 */
export function IsCurrentPassword(fieldDescription?: string) {
  return applyDecorators(
    Field(() => String, {
      description:
        fieldDescription || GRAPHQL_DESCRIPTIONS.AUTH.CURRENT_PASSWORD,
    }),
    IsString({
      message: VALIDATION_MESSAGES.REQUIRED.STRING('Mật khẩu hiện tại'),
    }),
    IsNotEmpty({ message: VALIDATION_MESSAGES.PASSWORD.CURRENT_REQUIRED }),
  )
}

/**
 * Decorator cho simple string field với custom validation
 *
 * Generic decorator cho string fields với custom min/max length
 *
 * @param fieldDescription - Mô tả field cho GraphQL
 * @param minLength - Độ dài tối thiểu
 * @param maxLength - Độ dài tối đa
 * @param isOptional - Có cho phép null/undefined không
 */
export function IsValidString(
  fieldDescription: string,
  minLength?: number,
  maxLength?: number,
  isOptional = false,
) {
  const decorators = [
    Field(() => String, {
      nullable: isOptional,
      description: fieldDescription,
    }),
    IsString({ message: VALIDATION_MESSAGES.REQUIRED.STRING('Field') }),
  ]

  if (!isOptional) {
    decorators.push(
      IsNotEmpty({ message: VALIDATION_MESSAGES.REQUIRED.NOT_EMPTY('Field') }),
    )
  } else {
    decorators.push(IsOptional())
  }

  if (minLength !== undefined) {
    decorators.push(
      MinLength(minLength, {
        message: VALIDATION_MESSAGES.LENGTH.MIN('Field', minLength),
      }),
    )
  }

  if (maxLength !== undefined) {
    decorators.push(
      MaxLength(maxLength, {
        message: VALIDATION_MESSAGES.LENGTH.MAX('Field', maxLength),
      }),
    )
  }

  return applyDecorators(...decorators)
}
