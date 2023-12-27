import { CanActivate, ExecutionContext, Inject, UnauthorizedException } from "@nestjs/common";
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

    console.log(refreshToken);
    
    if (!refreshToken) throw new UnauthorizedException('Invalid Refresh Token');;

    console.log('llegue aca');
    

    try {
      const decodedRefreshToken = await this.jwtService.verifyAsync(refreshToken, {
        secret: this.confiService.get<string>('jwt.secret')
      })

      if(!decodedRefreshToken) {
        throw new UnauthorizedException('Invalid Refresh Token');
      }
      
      if(!decodedRefreshToken) return false;
      request.user = decodedRefreshToken;
      return true
    } catch (error) {
      console.log(error, 'refresh token error al decodificar');
      return false;
    }
  }
}