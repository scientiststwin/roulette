import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { AuthModule } from './auth/auth.module';
import redisConfig from './config/redis.config';
import jwtConfig from './config/jwt.config';
import validationSchema from './config/configs.schema';

@Module({
  imports: [
    AuthModule,
    GameModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      validationSchema: validationSchema,
      load: [redisConfig, jwtConfig],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
