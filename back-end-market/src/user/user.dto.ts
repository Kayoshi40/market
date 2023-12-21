/* eslint-disable prettier/prettier */
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UserDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  avatar: string;

  @IsOptional()
  @IsString()
  phone?: string;
}
