import { Body, Controller, Get, Post } from '@nestjs/common';
import { BovinosService } from './bovinos.service';
import { CreateBovinosDto } from 'src/dtos/create-bovinos-body.dto';

@Controller() 
export class BovinosController {
  constructor(private readonly bovinosService: BovinosService) {}

  @Get('bovinos')
  getBovinos() {
    return this.bovinosService.findAllBovinos();
  }

  @Post('bovinos')
  postBovinos(@Body() body: CreateBovinosDto){
    return this.bovinosService.addBovinos(body);
  }
}