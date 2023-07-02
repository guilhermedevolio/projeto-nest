import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskDto } from 'src/dto/task.dto';
import { UserDto } from 'src/dto/user.dto';
import { Task } from 'src/entity/task.entity';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    findAll(): Promise<User[]> {
        return this.usersRepository.find({
            relations: {
                tasks: true
            },
        });
    }

    create(dto: UserDto): Promise<User> {
        return this.usersRepository.save(this.usersRepository.create(dto));
    }

    getHello(): string {
        return 'Hello Task Service!';
    }
}
