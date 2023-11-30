import { Injectable } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import { GenerateToken } from "../dto/auth.dto";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService
  ) {}

  public async generateToken(payload: GenerateToken) {
    const token = await this.jwtService.signAsync(payload);
    return token;
  }
} 