import { Permission, Role } from '@shared/enums'
import { IAuthUser } from '@shared/types/user.types'
import { JwtPayload } from '@supabase/supabase-js'
import { Request, Response } from 'express'

export type CustomJwtPayload = JwtPayload & {
  email: string
  role: Role
  permissions: Permission[]
}

export interface CustomGqlContext {
  req: CustomRequest
}

export interface CustomAuthResponse {
  access_token: string
  refresh_token: string
  user: IAuthUser
}

export interface CustomRequest extends Request {
  authorization?: string
  userId?: string
}

export interface CustomResponse extends Response {
  status(code: number): this
  json(body: any): this
}
