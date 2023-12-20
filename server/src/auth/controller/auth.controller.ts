import { Body, Controller, ForbiddenException, Get, Post, Req, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto, Login } from '../dto/auth.dto';
import { AuthService } from '../service/auth.service';
import { AuthGuard } from 'src/guards';
import { RefreshTokenGuard } from 'src/guards/refreshToken.guard';

interface ExtendsRequest extends Request {
  cookies: { [key: string]: string }
} 

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('signup')
  async register(@Body() body: CreateUserDto, @Res({ passthrough: true }) res: Response) {
    const { accessToken, refreshToken, email } = await this.authService.signup(body);
    const accessTokenExpiresIn = 60;
    const refreshTokenExpiresIn = 180;

    res.cookie('access_token', accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict'
      // expires: new Date(Date.now() + accessTokenExpiresIn * 1000)
    });
    res.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict' 
      // expires: new Date(Date.now() + refreshTokenExpiresIn * 1000)
    });
    return { accessToken, refreshToken, email };
  }

  @Get('login')
  async signIn(@Body() body: Login, @Res({ passthrough: true }) res: Response) {
    const { accessToken, refreshToken } = await this.authService.signup(body);
    const accessTokenExpiresIn = 60;
    const refreshTokenExpiresIn = 180;

    res.cookie('access_token', accessToken, { httpOnly: true, expires: new Date(Date.now() + accessTokenExpiresIn * 1000) });
    res.cookie('refresh_token', refreshToken, { httpOnly: true, expires: new Date(Date.now() + refreshTokenExpiresIn * 1000) });
    return this.authService.signin(body);
  }

  @UseGuards(RefreshTokenGuard)
  @Post('refresh')
  async refreshToken(@Body() refreshToken: string, @Req() request: ExtendsRequest, @Res() res: Response) {
    const refreshTokenFromCookie = request.cookies['refresh_token'];

    console.log('entre controller refresh');
    
    try {
      console.log(refreshToken, 'refresh token controller');
      const newToken = await this.authService.refreshTokens(refreshTokenFromCookie);
      console.log(newToken, 'new token');

      
      res.cookie('access_token2', newToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict'
      });

      return newToken;
    } catch (error) {
      console.log(error, 'controller refresh');
      throw new ForbiddenException('Invalid refresh token');
    }
  }

  @Get('verify')
  async verifyToken() { }
}
