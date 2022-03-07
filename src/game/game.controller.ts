import { Body, Controller, Delete, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { User } from 'src/shared/decorator/user.decorator';
import { GameService } from './game.service';
import { SpinGame } from './models/game.dto';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  newGame(@User() user) {
    const userId = user.id;
    const userBalance = user.balance;

    return this.gameService.createNewGame(userId, userBalance);
  }

  @Put('/spin')
  @UseGuards(JwtAuthGuard)
  updateGame(@User() user, @Body() body: SpinGame) {
    const userId = user.id;

    return this.gameService.spinGame(userId, body);
  }

  @Delete('/end')
  @UseGuards(JwtAuthGuard)
  endGame(@User() user) {
    const userId = user.id;

    return this.gameService.endGame(userId);
  }
}
