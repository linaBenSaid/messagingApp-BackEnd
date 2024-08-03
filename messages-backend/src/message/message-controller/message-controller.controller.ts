import { Body, Controller, Post } from '@nestjs/common';
import { createMessageDto } from '../createMessageDto/createMessageDto';
import { MessageServiceService } from '../message-service/message-service.service';

@Controller('Message')
export class MessageControllerController {

    constructor(private messageService: MessageServiceService){}
    @Post()
    async createMessage(@Body() createMessageDto: createMessageDto){
        return this.messageService.createMessage(createMessageDto)
    }




}
