import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class BovinosService {
  constructor(private prisma: PrismaService) {}

  async findAllBovinos() {
    return await this.prisma.bovinos.findMany()
  }
}