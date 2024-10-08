import { Module } from "@nestjs/common";
import { CassandraModule } from "src/common/cassandra/cassandra.module";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { UserRepository } from "./user.repository";

@Module({
    imports: [CassandraModule],
    controllers: [UserController],
    providers: [
        UserService,
        UserRepository
    ],
    exports: [
        UserService,
        UserRepository
    ]
})
export class UserModule { }
