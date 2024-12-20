import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { DatabaseModule } from '@app/common';
import { TokenDocument, TokenSchema } from './models/token.schema';
import { TokenRepository } from './token.repository';
import { TokenController } from './token.controller';
import { LoggerModule } from 'nestjs-pino';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: TokenDocument.name, schema: TokenSchema },
    ]),
    LoggerModule,
    JwtModule,
  ],
  providers: [TokenService, TokenRepository],
  controllers: [TokenController],
  exports: [TokenService],
})
export class TokenModule {}
