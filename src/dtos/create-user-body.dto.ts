import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Nome não pode estar vazio' })
  nome: string;
  @IsNotEmpty({ message: 'Email não pode estar vazio' })
  email: string;
  @IsNotEmpty({ message: 'Usuário não pode estar vazio' })
  usuario: string;
  @IsNotEmpty({ message: 'Senha não pode estar vazio' })
  senha: string;
}
