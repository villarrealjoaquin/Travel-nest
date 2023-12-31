import { CanActivate, ExecutionContext, Inject } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";

export class RefreshTokenGuard implements CanActivate {
  constructor(
    @Inject(JwtService)
    private readonly jwtService: JwtService,
    private readonly confiService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const refreshToken = request.cookies['refresh_token'];
    // console.log(refreshToken, 'refresh_token');

    if (!refreshToken) return false;

    try {
      const decodedRefreshToken = await this.jwtService.verifyAsync(refreshToken, {
        secret: this.confiService.get<string>('jwt.secret')
      })
      // console.log(decodedRefreshToken, 'decodificado');
      
      if(!decodedRefreshToken) return false;
      request.user = decodedRefreshToken;
      return true
    } catch (error) {
      console.log(error, 'refresh token error al decodificar');
      return false;
    }
  }
}