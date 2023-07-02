import { Module } from '@nestjs/common';
import { TaskModule } from './modules/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entity/task.entity';
import { User } from './entity/user.entity';
import { UserModule } from './modules/user.module';

@Module({
  imports: [
    TaskModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'gddeveloper',
      database: 'projetonest',
      entities: [Task, User],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
