import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { TaskDto } from 'src/dto/task.dto';
import { UserService } from 'src/services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/list')
  @HttpCode(HttpStatus.OK)
  listTask() {
    return this.userService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  getHello(@Param() params: any): string {
    const { id } = params;
    return this.userService.getHello();
  }

  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  createTask(@Body() body: TaskDto) {
    return this.userService.create(body);
  }
}
