export class CreateUserDto {
  name: string;
  lastname: string;
  email: string;
  password: string;
}

export class UpdateUserDto {
  name: string;
  lastname: string;
  email: string;
  password: string;
  refreshToken?: string;
}