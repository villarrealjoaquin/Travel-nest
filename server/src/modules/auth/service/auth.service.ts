import { BadRequestException, ForbiddenException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import { UserService } from "src/modules/user/service/user.service";
import { ConfigService } from "@nestjs/config";
import { GenerateToken, Signin, Signup } from "../dto/auth.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly configService: ConfigService
  ) {}

  async signup(user: Signup) {
    const { password, email } = user;
    const userExists = await this.userService.findOne(email);
    if (userExists) {
      throw new BadRequestException('User already exists');
    }
    const saltOrRounds = 10;
    const passwordHashed = await this.hashData(password, saltOrRounds);
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

  async signin(user: Signin) {
    const { email, password } = user;
    const findUser = await this.userService.findOne(email);
    if (!findUser) throw new NotFoundException('User not found');

    const isMatch = await bcrypt.compare(password, findUser.password);
    if (!isMatch) {
      throw new UnauthorizedException("Invalid password");
    }

    const payload = { email: findUser.email };
    const { accessToken, refreshToken } = await this.generateTokens(payload);
    return {
      accessToken,
      refreshToken,
      email: findUser.email
    }
  }

  hashData(data: string, saltOrRounds: number) {
    return bcrypt.hash(data, saltOrRounds);
  }

  async generateTokens(payload: GenerateToken) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, { expiresIn: '1m' }),
      this.jwtService.signAsync(payload, { expiresIn: '30m' }),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  async verifyToken(token: string): Promise<any> {
    return this.jwtService.verifyAsync(token);
  }

  async refreshTokens(refresh: string) {
    try {
      const decodedRefreshToken = await this.jwtService.verifyAsync(refresh, { secret: this.configService.get<string>('jwt.secret') });
      if (!decodedRefreshToken) throw new UnauthorizedException('invalid credentials');

      const newToken = await this.jwtService.signAsync({}, {
        secret: this.configService.get<string>('jwt.secret'),
        expiresIn: '5m'
      });

      return newToken;
    } catch (error) {
      console.log(error);
    }
  }
} 