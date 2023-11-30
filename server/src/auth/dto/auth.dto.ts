import { IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator'

export class CreateUserDto {
  name: string;
  lastname:string;
  email:string;
  password:string;
}

export class Login {
  name: string;
  lastname:string;
  email:string;
  password:string;
}

export class GenerateToken {
  email:string;
}