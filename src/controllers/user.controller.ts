import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { TaskDto } from 'src/dto/task.dto';
import { UserService } from 'src/services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/list')
  @HttpCode(HttpStatus.OK)
  listUsers() {
    return this.userService.findAll();
  }

  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  createUser(@Body() body: TaskDto) {
    return this.userService.create(body);
  }
}
