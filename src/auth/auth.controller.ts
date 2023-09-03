import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ValidateUserDto } from 'src/dtos/validate-user-body.dto';
import { AuthGuard } from './auth.guard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('auth/login')
  async login(@Body() body: ValidateUserDto) {
    return this.authService.validarUsuario(body.usuario, body.senha);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    const user = await this.authService.getProfile(req.user.usuario);
    user.senha = `${user.senha[0]}********${user.senha.slice(-1)}`;
    return user;
  }
}
