import { Injectable } from '@nestjs/common';

@Injectable()
export class GameService {
  createNewGame() {
    console.log('create new game');
  }

  updateGame() {
    console.log('update new game');
  }

  endGame() {
    console.log('end the game');
  }
}
