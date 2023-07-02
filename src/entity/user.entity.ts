import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Task } from './task.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Name: string;

  @Column()
  Status: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[];
}