import { Module } from '@nestjs/common';
import { BovinosModule } from './bovinos/bovinos.module';
import { PrismaService } from './database/prisma.service';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { ProfileService } from './profile/profile.service';
import { ProfileModule } from './profile/profile.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [BovinosModule, AuthModule, ProfileModule, UsersModule],
  controllers: [],
  providers: [PrismaService, UsersService, ProfileService],
})
export class AppModule {}
