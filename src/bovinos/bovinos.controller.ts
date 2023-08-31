import { Body, Controller, Get, Post } from '@nestjs/common';
import { BovinosService } from './bovinos.service';
import { CreateBovinosBody } from 'src/dtos/create-bovinos-body';

@Controller() 
export class BovinosController {
  constructor(private readonly bovinosService: BovinosService) {}

  @Get('bovinos')
  getBovinos() {
    return this.bovinosService.findAllBovinos();
  }

  @Post('bovinos')
  postBovinos(@Body() body: CreateBovinosBody){
    return this.bovinosService.addBovinos(body);
  }
}