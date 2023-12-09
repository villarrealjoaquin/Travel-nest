import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { CreateUserDto, Login } from '../dto/auth.dto';
import { AuthService } from '../service/auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('signup')
  async register(@Body() body: CreateUserDto, @Res({ passthrough: true }) res: Response) {
    const { accessToken, refreshToken, email } = await this.authService.signup(body);
    res.cookie('access_token', accessToken, { httpOnly: true });
    res.cookie('refresh_token', refreshToken, { httpOnly: true });
    return { accessToken, refreshToken, email };
  }

  @Get('login')
  async signIn(@Body() body: Login) {
    return this.authService.signin(body);
  }
}
