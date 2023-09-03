import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ValidateUserDto } from 'src/dtos/validate-user-body.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: ValidateUserDto) {
    return this.authService.validarUsuario(body.usuario, body.senha);
  }
}
