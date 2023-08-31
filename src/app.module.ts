import { Module } from '@nestjs/common';
import { BovinosModule } from './bovinos/bovinos.module';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [BovinosModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
