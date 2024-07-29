import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';
import { createUserDto } from '../dto/createUserDto.dto';

@Injectable()
export class UserServiceService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}

    async createUser(createUserDto: createUserDto){
        return this.userRepository.save(createUserDto)
    }

    



}
