import { Module } from '@nestjs/common';
import { BovinosModule } from './bovinos/bovinos.module';
import { PrismaService } from './database/prisma.service';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [BovinosModule, AuthModule],
  controllers: [],
  providers: [PrismaService, UsersService],
})
export class AppModule {}
