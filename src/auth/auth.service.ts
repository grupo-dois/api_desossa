import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../dtos/create-user-body.dto';
import { UsersService } from '../users/users.service';
import { jwtConstants } from './constants';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validarUsuario(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);
    if (!user) {
      throw new UnauthorizedException('Usuário ou Senha Inválidos');
    }
    const isMatch = await bcrypt.compare(password, user.senha);
    if (isMatch) {
      return await this.gerarToken(user);
    }
    throw new UnauthorizedException('Usuário ou Senha Inválidos');
  }

  async gerarToken(payload: CreateUserDto) {
    return {
      access_token: this.jwtService.sign(
        { usuario: payload.usuario },
        {
          secret: jwtConstants.SECRET,
          expiresIn: '86400s',
        },
      ),
    };
  }
}
