/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class CategoryDto {
  @IsString()
  name: string;
}
