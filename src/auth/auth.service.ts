import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  loginUser(userName, passowrd) {
    return 'ok';
  }
}
