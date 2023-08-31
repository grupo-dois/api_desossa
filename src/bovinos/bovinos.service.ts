import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateBovinosBody } from 'src/dtos/create-bovinos-body';

@Injectable()
export class BovinosService {
  constructor(private prisma: PrismaService) {}

  async findAllBovinos() {
    return await this.prisma.bovinos.findMany()
  }

  async addBovinos(body: CreateBovinosBody) {
    const {
      nome,
      data_abate,
      data_desossa,
      raca,
      peso_carcaca,
      responsavel_desossa,
    } = body;
    
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
  }
}