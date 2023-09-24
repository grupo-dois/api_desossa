import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateBovinosDto } from '../dtos/create-bovinos-body.dto';

@Injectable()
export class BovinosService {
  constructor(private prisma: PrismaService) { }

  async findAllBovinos() {
    return await this.prisma.bovinos.findMany()
  }

  async findOneBovino(nome: string) {
    return await this.prisma.bovinos.findFirst({
      where: {
        nome: nome,
      },
    })
  }

  async addBovinos(body: CreateBovinosDto) {
    const {
      nome,
      data_abate,
      data_desossa,
      raca,
      peso_carcaca,
      responsavel_desossa,
    } = body;
    const haveBovino = await this.findOneBovino(body.nome)
    if (haveBovino == null) {
      const bovino = await this.prisma.bovinos.create({
        data: {
          nome,
          data_abate,
          data_desossa,
          raca,
          peso_carcaca,
          responsavel_desossa
        }
      })
      return { bovino, }
    } else {
      throw new HttpException(
        'Nome já existente na base',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}