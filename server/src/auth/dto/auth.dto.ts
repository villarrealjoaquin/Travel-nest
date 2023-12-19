import { IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator'

export class CreateUserDto {
  name: string;
  lastname: string;
  email: string;
  password: string;
  // refreshToken: string;
}

export class Login {
  name: string;
  lastname: string;
  email: string;
  password: string;
}

export class GenerateToken {
  email: string;
}

export class Signup {
  name: string;
  lastname: string;
  email: string;
  password: string;
}

export class Signin {
  email: string;
  password: string;
}