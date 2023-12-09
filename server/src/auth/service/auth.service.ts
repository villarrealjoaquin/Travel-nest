import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { GenerateToken, Signin, Signup } from "../dto/auth.dto";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import { UserService } from "src/user/service/user.service";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  async generateTokens(payload: GenerateToken) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        payload,
      ),
      this.jwtService.signAsync(
        payload,
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  async verifyToken(token: string): Promise<any> {
    return this.jwtService.verifyAsync(token);
  }

  public async signup(user: Signup) {
    const { password, email } = user;
    const userExists = await this.userService.findOne(email);
    if (userExists) {
      throw new BadRequestException('User already exists');
    }
    const saltOrRounds = 10;
    const passwordHashed = await bcrypt.hash(password, saltOrRounds);
    const createUser = {
      ...user,
      password: passwordHashed
    };

    await this.userService.createUser(createUser);

    const payload = { email };
    const { accessToken, refreshToken } = await this.generateTokens(payload);

    return {
      accessToken,
      refreshToken,
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
    const token = this.generateTokens(payload);
    return {
      token,
      email: findUser.email
    }
  }
} 