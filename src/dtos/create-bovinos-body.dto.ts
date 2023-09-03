import { IsNotEmpty } from 'class-validator';

export class CreateBovinosDto {
  @IsNotEmpty()
  nome: string;
  @IsNotEmpty()
  data_abate: number;
  @IsNotEmpty()
  data_desossa: number;
  @IsNotEmpty()
  raca: string;
  @IsNotEmpty()
  peso_carcaca: number;
  @IsNotEmpty()
  responsavel_desossa: string;
}