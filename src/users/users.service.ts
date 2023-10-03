import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateUserDto } from '../dtos/create-user-body.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  saltOrRounds = 10;

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
    const hashedPass: string = await bcrypt.hash(senha, this.saltOrRounds);
    const haveUser = await this.findOneByUsername(body.usuario);
    if (haveUser == null) {
      const user = await this.prisma.users.create({
        data: {
          nome,
          email,
          usuario,
          senha: hashedPass.toString(),
        },
      });
      return { user };
    } else {
      throw new HttpException(
        'Usuário já existente na base',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
