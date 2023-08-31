import { Module } from '@nestjs/common';
import { BovinosController } from './bovinos.controller';
import { BovinosService } from './bovinos.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  imports: [],
  controllers: [BovinosController],
  providers: [BovinosService, PrismaService],
})
export class BovinosModule {}