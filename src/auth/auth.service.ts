import { Injectable } from '@nestjs/common';
import { LoginUserDto } from './models/auth.dto';

@Injectable()
export class AuthService {
  private readonly mockUsers = [
    {
      userName: 'ilia',
      password: '123',
      balance: 500,
    },
    {
      userName: 'nuno',
      password: '123',
      balance: 200,
    },
    {
      userName: 'alex',
      password: '123',
      balance: 50,
    },
    {
      userName: 'tina',
      password: '123',
      balance: 100,
    },
  ];


  loginUser(loginUser: LoginUserDto) {
    const { username, password } = loginUser;
    return { username, password };
  }

  
}
