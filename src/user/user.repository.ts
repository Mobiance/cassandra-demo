import { Injectable, OnModuleInit } from "@nestjs/common";
import { mapping } from "cassandra-driver";
import { CassandraService } from "src/common/cassandra/cassandra.service";
import { User } from "./user.model";

@Injectable()
export class UserRepository implements OnModuleInit {
    constructor(private cassandraService: CassandraService) { }

    userMapper: mapping.ModelMapper<User>;

    onModuleInit() {
        const MappingOptions = {
            models: {
                User: {
                    tables: ['users'],
                    mappings: new mapping.UnderscoreCqlToCamelCaseMappings()
                }
            }
        }
        this.userMapper = this.cassandraService.createMapper(MappingOptions).forModel('User');
    }

    async getUsers() {
        return (await this.userMapper.findAll()).toArray();
    }
    
    async getUser(id: number) {
        return (await this.userMapper.find({ id: id })).toArray();
    }

    async createUser(user: User) {
        return (await this.userMapper.insert(user)).toArray();
    }
    
    async updateUserName(id: number, name: string) {
        const user = new User();
        user.id = id;
        user.name = name;
        return (await this.userMapper.update(user, {fields : ['id', 'name'], ifExists: true})).toArray();
    }
}
