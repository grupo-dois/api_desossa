import { IsNotEmpty } from 'class-validator';

export class CreateBovinosDto {
  @IsNotEmpty({ message: 'Campo Nome é obrigatório!' })
  nome: string;
  @IsNotEmpty({ message: 'Campo Data do abate é obrigatório!' })
  data_abate: number;
  @IsNotEmpty({ message: 'Campo Data da desossa é obrigatório!' })
  data_desossa: number;
  @IsNotEmpty({ message: 'Campo Raça é obrigatório!' })
  raca: string;
  @IsNotEmpty({ message: 'Campo Peso da carcaça é obrigatório!' })
  peso_carcaca: number;
  @IsNotEmpty({ message: 'Campo Responsável pela desossa é obrigatório!' })
  responsavel_desossa: string;
}
