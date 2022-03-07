import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';
import BetType from 'src/shared/enums/betType.enum';
import { SpinGame } from './models/game.dto';

@Injectable()
export class GameService {
  constructor(private readonly redisService: RedisService) {}

  async createNewGame(userId: number, userBalance: number) {
    const userGameInfo = {
      balance: userBalance,
    };

    await this.createOrUpdateGameSession(userId, userGameInfo);
    return;
  }

  async spinGame(userId: number, spinGame: SpinGame) {
    const initGameInfo = await this.getGameSessionInformation(userId);
    const playerBalance = initGameInfo.balance;

    for (const bet of spinGame.betInfo) {
      if (bet.betAmount > playerBalance) {
        throw new HttpException(
          'your balance is less than one of your bet money ',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    const randomNumber = Math.round(Math.random() * 36);
    const winnerBets = [];

    for (const bet of spinGame.betInfo) {
      if (bet.betType === BetType.EVEN) {
        if (randomNumber % 2 === 0) winnerBets.push(bet);
      } else if (bet.betType === BetType.ODD) {
        if (randomNumber % 2 === 1) winnerBets.push(bet);
      } else {
        if (randomNumber == bet.betType) winnerBets.push(bet);
      }
    }

    if (winnerBets.length == 0) {
      return { winnerBets: [], newBalance: playerBalance };
    }

    let moneyWin = 0;
    winnerBets.forEach((winnerBet) => {
      moneyWin += winnerBet.betAmount;
    });

    const userFinalBalance = playerBalance + moneyWin;
    const newGameInfo = { ...initGameInfo, balance: userFinalBalance };
    await this.createOrUpdateGameSession(userId, newGameInfo);

    return { winnerBets, newBalance: userFinalBalance };
  }

  async endGame(userId: number) {
    await this.deleteGameSession(userId);
  }

  private async createOrUpdateGameSession(userId: number, info: any) {
    return await this.redisService
      .getClient()
      .set(`${userId}`, JSON.stringify(info));
  }

  private async getGameSessionInformation(userId: number) {
    const gameInformation = await this.redisService
      .getClient()
      .get(`${userId}`);
    return JSON.parse(gameInformation);
  }

  private async deleteGameSession(userId: number) {
    return await this.redisService.getClient().del(`${userId}`);
  }
}
