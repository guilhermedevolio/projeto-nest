import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Name: string;

  @Column()
  Status: string;

  @Column({ default: true })
  isActive: boolean;

  @ManyToOne(() => User, (user) => user.tasks)
  user: User
}