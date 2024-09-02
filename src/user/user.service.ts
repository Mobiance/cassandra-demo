import { Injectable } from "@nestjs/common";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
    constructor(private userRepository: UserRepository) { }

    async getUsers() {
        return this.userRepository.getUsers();
    }

    async getUserById(id: number) {
        return this.userRepository.getUser(id);
    }

    async createUser(user) {
        return this.userRepository.createUser(user);
    }

    async updateUserName(id: number, name: string) {
        return this.userRepository.updateUserName(id, name);
    }
}
