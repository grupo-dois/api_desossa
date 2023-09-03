import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { BovinosService } from './bovinos.service';
import { CreateBovinosDto } from 'src/dtos/create-bovinos-body.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller() 
export class BovinosController {
  constructor(private readonly bovinosService: BovinosService) {}
  
  @UseGuards(AuthGuard)
  @Get('bovinos')
  getBovinos() {
    return this.bovinosService.findAllBovinos();
  }

  @UseGuards(AuthGuard)
  @Post('bovinos')
  postBovinos(@Body() body: CreateBovinosDto){
    return this.bovinosService.addBovinos(body);
  }
}