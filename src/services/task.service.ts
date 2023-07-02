import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskDto } from 'src/dto/task.dto';
import { Task } from 'src/entity/task.entity';
import { Repository } from 'typeorm';
import { UserService } from './user.service';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private tasksRepository: Repository<Task>,
    ) {}

    findAll(): Promise<Task[]> {
        return this.tasksRepository.find();
    }

    create(dto: TaskDto): Promise<Task> {
        return this.tasksRepository.save(this.tasksRepository.create(dto));
    }

    getHello(): string {
        return 'Hello Task Service!';
    }
}
