import { CustomGqlContext } from '@shared/types/jwt.types'
import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'

export const CurrentUser = createParamDecorator(
  (_, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context)
    const gqlContext = ctx.getContext<CustomGqlContext>()
    return gqlContext.req.user
  },
)

export const CurrentUserId = createParamDecorator(
  (_, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context)
    const gqlContext = ctx.getContext<CustomGqlContext>()
    return gqlContext.req.userId
  },
)
