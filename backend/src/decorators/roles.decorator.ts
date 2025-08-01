import { Role } from '@shared/enums/role.enum'
import { SetMetadata } from '@nestjs/common'

export const ROLES_KEY = 'roles'

export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles)
