import { Module } from '@nestjs/common';
import { BovinosController } from './bovinos.controller';
import { BovinosService } from './bovinos.service';
import { PrismaService } from 'src/database/prisma.service';
import { AuthModule } from 'src/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [AuthModule, JwtModule],
  controllers: [BovinosController],
  providers: [BovinosService, PrismaService],
})
export class BovinosModule {}