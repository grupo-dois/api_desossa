import { Controller, Get } from '@nestjs/common';
import { BovinosService } from './bovinos.service';

@Controller() 
export class BovinosController {
  constructor(private readonly bovinosService: BovinosService) {}

  @Get('bovinos')
  getBovinos() {
    return this.bovinosService.findAllBovinos();
  }
}