import { IsNotEmpty } from 'class-validator';

export class ValidateUserDto {
  @IsNotEmpty({ message: 'Usuário não pode estar vazio' })
  usuario: string;
  @IsNotEmpty({ message: 'Senha não pode estar vazia' })
  senha: string;
}
