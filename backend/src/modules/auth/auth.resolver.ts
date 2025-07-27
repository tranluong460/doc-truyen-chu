import { Public } from '@decorators/public.decorator'
import { CustomAuthResponse } from '@shared/types/jwt.types'
import { AuthService } from '@modules/auth/auth.service'
import { AuthResponse } from '@modules/auth/dto/auth-response.type'
import { LoginInput } from '@modules/auth/dto/login.input'
import { Args, Mutation, Resolver } from '@nestjs/graphql'

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Public()
  @Mutation(() => AuthResponse)
  async login(
    @Args('input') loginInput: LoginInput,
  ): Promise<CustomAuthResponse> {
    const user = await this.authService.validateUser(
      loginInput.email,
      loginInput.password,
    )
    return this.authService.login(user)
  }

  @Public()
  @Mutation(() => AuthResponse)
  async refreshToken(
    @Args('refreshToken') refreshToken: string,
  ): Promise<CustomAuthResponse> {
    return this.authService.refreshToken(refreshToken)
  }

  @Public()
  @Mutation(() => String)
  revokeToken(@Args('refreshToken') refreshToken: string): string {
    const result = this.authService.revokeToken(refreshToken)
    return result.message
  }
}
