import { IsDefined, IsString } from 'class-validator';

export class UserDto {
  @IsDefined()
  @IsString()
  readonly username: string;

  @IsDefined()
  @IsString()
  readonly password: string;
}