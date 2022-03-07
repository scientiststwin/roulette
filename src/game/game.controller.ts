import { Controller, Delete, Post, Put } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private gameService: GameService) {}

  @Post('create')
  newGame() {
    return this.gameService.createNewGame();
  }

  @Put('/spin')
  updateGame() {
    return this.gameService.updateGame();
  }

  @Delete('/end')
  endGame() {
    return this.gameService.endGame();
  }
}
