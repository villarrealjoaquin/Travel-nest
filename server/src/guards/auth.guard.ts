import { CanActivate, ExecutionContext, Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @Inject(JwtService)
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.cookies['access_token'];
    // console.log(token);
    console.log(request.headers);
    if (!token) return false;

    try {
      // console.log('paseeeee');
      
      const decodedToken = await this.jwtService.verifyAsync(token, { secret: this.configService.get<string>('jwt.secret') });
      // console.log(decodedToken, 'pase 2');
      request.user = decodedToken;
      return true;
    } catch (error) {
      console.error('Error al verificar el token:', error);
      return false;
    }
  }
}
