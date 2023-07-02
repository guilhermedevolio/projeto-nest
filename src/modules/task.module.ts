import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from 'src/controllers/task.controller';
import { Task } from 'src/entity/task.entity';
import { User } from 'src/entity/user.entity';
import { TaskService } from 'src/services/task.service';

@Module({
  imports: [TypeOrmModule.forFeature([Task, User])],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
