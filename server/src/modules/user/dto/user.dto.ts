export class DTOCreateUser {
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