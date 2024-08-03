import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Convo } from '../entity/convo.entity';
import { Repository } from 'typeorm';
import { createConvoDto } from '../dto/createConvoDto.dto';

@Injectable()
export class ConvoServiceService {

    constructor(
        @InjectRepository(Convo)
        private convoRepository: Repository<Convo>
    ) {}

    async createConvo(createConvoDto: createConvoDto){
        return this.convoRepository.save(createConvoDto)
    }
    
    async getUserConvos(userId: string){
        return this.convoRepository.find({
      where: { user1: { user_id: userId } },
    //   relations: ['user1', 'user2', 'meessage'],
      relations: ['user2'],
    });
    }
}
