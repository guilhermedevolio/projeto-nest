import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { TaskDto } from 'src/dto/task.dto';
import { TaskService } from 'src/services/task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('/list')
  @HttpCode(HttpStatus.OK)
  listTask() {
    return this.taskService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  getHello(@Param() params: any): string {
    const { id } = params;
    return this.taskService.getHello();
  }

  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  createTask(@Body() body: TaskDto) {
    return this.taskService.create(body);
  }
}
