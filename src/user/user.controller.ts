import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model/user.model';

@Controller('api')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('user/:userId')
  findById(@Param('userId') userId: number) {
    return this.userService.findById(userId);
  }

  @Post('users')
  create(@Body() user: User) {
    return this.userService.create(user);
  }

  @Get('user/:userId/avatar')
  getAvatar(@Param('userId') userId: number) {
    return this.userService.getAvatar(userId);
  }

  @Delete('user/:userId/avatar')
  removeAvatar(@Param('userId') userId: number) {
    return this.userService.removeAvatar(userId);
  }
}
