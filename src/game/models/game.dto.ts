import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import BetType from 'src/shared/enums/betType.enum';
import { IsNumberOrSelectedString } from 'src/shared/validator';

class Spin {
  @IsNotEmpty()
  @IsNumber()
  betAmount: number;

  @IsNotEmpty()
  @IsNumberOrSelectedString([BetType.EVEN, BetType.ODD])
  betType: string | number;
}

export class SpinGame {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Spin)
  betInfo: Spin[];
}
