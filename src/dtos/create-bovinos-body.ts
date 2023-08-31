import { CreateDianteiroBody } from './create-dianteiro-body';
import { CreateTraseiroBody } from './create-traseiro-body';

export class CreateBovinosBody {
  nome: string;
  data_abate: number;
  data_desossa: number;
  raca: string;
  peso_carcaca: number;
  responsavel_desossa: string;
  dianteiro: CreateDianteiroBody;
  traseiro: CreateTraseiroBody;
}