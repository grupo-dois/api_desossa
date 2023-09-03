import { Controller, UseGuards, Get, Request } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @UseGuards(AuthGuard)
  @Get()
  async getProfile(@Request() req) {
    const user = await this.profileService.getProfile(req.user.usuario);
    user.senha = `${user.senha[0]}********${user.senha.slice(-1)}`;
    return user;
  }
}
