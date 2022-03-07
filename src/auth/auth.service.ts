import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  loginUser(userName, passowrd) {
    return 'ok';
  }

  mockUserInformation() {
    return [
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
  }
}
