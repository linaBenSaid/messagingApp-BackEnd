import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from '../entity/message.entity';
import { Repository } from 'typeorm';
import { createMessageDto } from '../createMessageDto/createMessageDto';

@Injectable()
export class MessageServiceService {

    constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>
    ){}

    async createMessage(createMessageDto: createMessageDto){
        return this.messageRepository.save(createMessageDto)
    }
    
}
