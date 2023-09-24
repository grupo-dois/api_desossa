import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '../auth/auth.guard';
import { CreateUserDto } from 'src/dtos/create-user-body.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard)
  @Post('adicionar')
  postBovinos(@Body() body: CreateUserDto) {
    return this.usersService.addUsers(body);
  }
}
