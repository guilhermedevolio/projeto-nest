import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskDto } from 'src/dto/task.dto';
import { Task } from 'src/entity/task.entity';
import { Repository } from 'typeorm';
import { UserService } from './user.service';
import { User } from 'src/entity/user.entity';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private tasksRepository: Repository<Task>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    findAll(): Promise<Task[]> {
        return this.tasksRepository.find();
    }

    async create(dto: TaskDto): Promise<Task> {
        const user = await this.userRepository.findOne({
            where: {
                id: dto.userId
            }
        });

        const task = this.tasksRepository.create(dto);
        task.user = user;
        return this.tasksRepository.save(task);
    }

    getHello(): string {
        return 'Hello Task Service!';
    }
}
