import { IsEmail, Length, Max, Min } from "class-validator";

    export class TaskDto {
        Name: string;
        Status: string;
        isActive: boolean;
        userId: number;
    }