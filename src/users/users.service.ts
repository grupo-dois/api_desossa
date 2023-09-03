import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOneByUsername(username: string) {
    const user = await this.prisma.users.findFirst({
      where: {
        usuario: username,
      },
    });
    return user;
  }
}
