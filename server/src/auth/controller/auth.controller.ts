import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto, Login } from '../dto/auth.dto';
import { AuthService } from '../service/auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post('signup')
  async register(@Body() body: CreateUserDto) {
    return this.authService.signup(body);
  }

  @Get('login')
  async signIn(@Body() body: Login) {
    return this.authService.signin(body);
  }
}
