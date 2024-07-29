import { Body, Controller, Post } from '@nestjs/common';
import { ConvoServiceService } from '../convo-service/convo-service.service';
import { createConvoDto } from '../dto/createConvoDto.dto';

@Controller('convo-controller')
export class ConvoControllerController {

    constructor(private convoService:ConvoServiceService){}

    @Post()
    async createConvo(@Body() createConvoDto:createConvoDto){
        return this.convoService.createConvo(createConvoDto)
    }
}
