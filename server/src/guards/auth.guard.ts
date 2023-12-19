import { CanActivate, ExecutionContext, Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { IncomingHttpHeaders } from "http";
import { Observable } from "rxjs";

interface ExtendedHeaders extends IncomingHttpHeaders {
  authorization?: string;
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @Inject(JwtService) private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    // console.log(request.headers);
    // console.log('original token', request.cookies.token);

    const token = request.cookies
    console.log(token);

    const cookieHeader = request.headers.cookie as string;
    if (!cookieHeader) {
      return undefined;
    }

    const cookies = cookieHeader.split(';').map(cookie => cookie.trim());
    const tokenCookie = cookies.find(cookie => cookie.startsWith('token='));

    if (!tokenCookie) {
      return undefined;
    }

    // const token = tokenCookie.replace('token=', '').trim();



    try {
      console.log('pase 2');
      const decodedToken = await this.jwtService.verifyAsync(token, { secret: this.configService.get<string>('jwt.secret') });
      // console.log(decodedToken, 'pase 2');
      // request.user = decodedToken;
      return true;
    } catch (error) {
      console.error('Error al verificar el token:', error);
      return false;
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const { authorization } = request.headers as unknown as ExtendedHeaders;
    const [type, token] = authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
