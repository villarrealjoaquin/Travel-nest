import { Body, Controller, Get, NotFoundException, Param, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { CreateUserDto, Login } from '../dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/service/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) { }

  @Post('signup')
  async register(@Body() body: CreateUserDto) {
    const { name, lastname, password, email } = body;
    const saltOrRounds = 10;
    const passwordHashed = await bcrypt.hash(password, saltOrRounds);
    const createUser = {
      name,
      lastname,
      password: passwordHashed,
      email,
    };
    await this.userService.createUser(createUser);
  }

  @Get('login')
  async signIn(@Body() body: Login) {
    const { email, password } = body;
    const findUser = await this.userService.findOne(email);
    if (!findUser) throw new NotFoundException('User not found');

    const isMatch = await bcrypt.compare(password, findUser.password);
    if (!isMatch) {
      throw new UnauthorizedException("Invalid password");
    }

    const payload = { email: findUser.email };
    const token = this.authService.generateToken(payload);
    return {
      token,
      email: findUser.email
    }
  }
}
