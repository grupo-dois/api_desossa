import { IsNotEmpty } from 'class-validator';
import { CreateDianteiroBody } from './create-dianteiro-body';
import { CreateTraseiroBody } from './create-traseiro-body';

export class CreateBovinosBody {
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
  dianteiro: CreateDianteiroBody;
  traseiro: CreateTraseiroBody;
}