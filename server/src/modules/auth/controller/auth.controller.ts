import { Body, Controller, ForbiddenException, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { RefreshTokenGuard } from 'src/guards/refreshToken.guard';
import { AuthService } from '../service/auth.service';
import { CreateUserDto, Login } from '../dto/auth.dto';

interface ExtendsRequest extends Request {
  cookies: { [key: string]: string }
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('signup')
  async register(@Body() body: CreateUserDto, @Res({ passthrough: true }) res: Response) {
    const { accessToken, refreshToken, email } = await this.authService.signup(body);

    res.cookie('access_token', accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict'
    });
    res.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict'
    });
    
    return { accessToken, refreshToken, email };
  }

  @Post('login')
  async signIn(@Body() body: Login, @Res({ passthrough: true }) res: Response) {
    const { accessToken, refreshToken } = await this.authService.signin(body);

    res.cookie('access_token', accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict'
    });
    res.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict'
    });

    return { accessToken, refreshToken };
  }

  @UseGuards(RefreshTokenGuard)
  @Post('refresh')
  async refreshToken(@Body() refreshToken: string, @Req() request: ExtendsRequest, @Res({ passthrough: true }) res: Response) {
    const refreshTokenFromCookie = request.cookies['refresh_token'];
    try {
      const newToken = await this.authService.refreshTokens(refreshTokenFromCookie);
      res.cookie('access_token', newToken);
      return newToken;
    } catch (error) {
      throw new ForbiddenException('Invalid refresh token');
    }
  }

  @Get('verify')
  async verifyToken() { }
}
