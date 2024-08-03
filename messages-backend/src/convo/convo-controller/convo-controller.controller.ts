import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ConvoServiceService } from '../convo-service/convo-service.service';
import { createConvoDto } from '../dto/createConvoDto.dto';

@Controller('Convo')
export class ConvoControllerController {

    constructor(private convoService:ConvoServiceService){}

    @Post()
    async createConvo(@Body() createConvoDto:createConvoDto){
        return this.convoService.createConvo(createConvoDto)
    }

    @Get(":id")
    async getUserConvos(@Param("id") id:string){
        return this.convoService.getUserConvos(id)
    }
}
