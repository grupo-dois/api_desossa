import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateUserDto } from '../dtos/create-user-body.dto';

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

  async addUsers(body: CreateUserDto) {
    const { nome, email, usuario, senha } = body;
    const haveUser = await this.findOneByUsername(body.usuario);
    if (haveUser == null) {
      const user = await this.prisma.users.create({
        data: {
          nome,
          email,
          usuario,
          senha,
        },
      });
      return { user };
    } else {
      throw new HttpException(
        'Nome já existente na base',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
