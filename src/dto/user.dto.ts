import { IsEmail, Length, Max, Min } from "class-validator";

export class UserDto {
    Name: string;
    Status: string;
    isActive: boolean;
}