import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from '../entity/message.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MessageServiceService {

    constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>
    ){}

    
}
