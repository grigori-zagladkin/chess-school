export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER',
}

export class UserDto {
  email: string;
  password: string;
  role: UserRole;
}
