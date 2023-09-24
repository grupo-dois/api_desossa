import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { BovinosService } from './bovinos.service';
import { CreateBovinosDto } from '../dtos/create-bovinos-body.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('bovinos')
export class BovinosController {
  constructor(private readonly bovinosService: BovinosService) {}

  @UseGuards(AuthGuard)
  @Get()
  getBovinos() {
    return this.bovinosService.findAllBovinos();
  }

  @UseGuards(AuthGuard)
  @Post()
  postBovinos(@Body() body: CreateBovinosDto){
    return this.bovinosService.addBovinos(body);
  }
}