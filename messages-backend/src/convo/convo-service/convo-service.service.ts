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
    
}
