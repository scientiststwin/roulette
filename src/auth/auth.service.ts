import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './models/auth.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  private readonly mockUsers = [
    {
      id: 1,
      username: 'ilia',
      password: '123',
      balance: 500,
    },
    {
      id: 2,
      username: 'nuno',
      password: '123',
      balance: 200,
    },
    {
      id: 3,
      username: 'alex',
      password: '123',
      balance: 50,
    },
    {
      id: 4,
      username: 'tina',
      password: '123',
      balance: 100,
    },
  ];

  loginUser(loginUser: LoginUserDto) {
    const { username, password } = loginUser;

    const user = this.mockUsers.find(
      (user) => user.username == username && user.password == password,
    );

    if (user) {
      const jwtPayload = {
        id: user.id,
        username: user.username,
        balance: user.balance,
      };
      return { access_token: this.jwtService.sign(jwtPayload) };
    } else
      throw new HttpException(
        'Username or Password is invalid',
        HttpStatus.BAD_REQUEST,
      );
  }
}
