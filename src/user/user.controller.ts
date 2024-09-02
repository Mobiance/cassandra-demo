
import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller()
export class UserController {
    constructor(private userService: UserService) { }

    @Get('users')
    async getUsers() {
        return this.userService.getUsers();
    }

    @Get('users/:id')
    async getUserById(@Param('id') id: number) {
        return this.userService.getUserById(id);
    }

    @Post('users')
    async createUser(@Body() user: CreateUserDto) {
        return this.userService.createUser(user);
    }

    @Put('users/:id')
    async updateUserName(@Param('id') id: number, @Body() user: UpdateUserDto) {
        return this.userService.updateUserName(id, user.name);
    }
}
