import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from 'src/controllers/task.controller';
import { UserController } from 'src/controllers/user.controller';
import { User } from 'src/entity/user.entity';
import { TaskService } from 'src/services/task.service';
import { UserService } from 'src/services/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
