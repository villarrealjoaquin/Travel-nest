import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { GenerateToken, Signin, Signup } from "../dto/auth.dto";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import { UserService } from "src/user/service/user.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) { }

  async generateToken(payload: GenerateToken) {
    const token = await this.jwtService.signAsync(payload);
    return token;
  }

  async verifyToken(token: string): Promise<any> {
    return this.jwtService.verifyAsync(token);
  }

  public async signup(user: Signup) {
    const { password, email } = user;
    const saltOrRounds = 10;
    const passwordHashed = await bcrypt.hash(password, saltOrRounds);
    const createUser = {
      ...user,
      password: passwordHashed
    };

    await this.userService.createUser(createUser);

    const payload = {
      email
    };

    const token = await this.generateToken(payload);

    return {
      token,
      email
    }
  }

  public async signin(user: Signin) {
    const { email, password } = user;
    const findUser = await this.userService.findOne(email);
    if (!findUser) throw new NotFoundException('User not found');

    const isMatch = await bcrypt.compare(password, findUser.password);
    if (!isMatch) {
      throw new UnauthorizedException("Invalid password");
    }

    const payload = { email: findUser.email };
    const token = this.generateToken(payload);
    return {
      token,
      email: findUser.email
    }
  }
} 