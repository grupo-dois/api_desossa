import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/dtos/create-user-body.dto';
import { UsersService } from 'src/users/users.service';
import { jwtConstants } from './constants';

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
    if (user.senha === password) {
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
          expiresIn: '120s',
        },
      ),
    };
  }

  async getProfile(username: string) {
    return await this.usersService.findOneByUsername(username);
  }
}