import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3, { message: '$property should be more than $constraint1' })
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
