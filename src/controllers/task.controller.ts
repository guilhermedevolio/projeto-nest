import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { TaskDto } from 'src/dto/task.dto';
import { TaskService } from 'src/services/task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('/list')
  @HttpCode(HttpStatus.OK)
  listTasks() {
    return this.taskService.findAll();
  }

  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  createTask(@Body() body: TaskDto) {
    return this.taskService.create(body);
  }
}
