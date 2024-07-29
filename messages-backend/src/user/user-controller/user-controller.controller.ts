import { Body, Controller, Post } from '@nestjs/common';
import { UserServiceService } from '../user-service/user-service.service';
import { createUserDto } from '../dto/createUserDto.dto';

@Controller('user')
export class UserControllerController {

    constructor(private userService: UserServiceService){}

    @Post()
    async createUser(@Body() createUserDto: createUserDto){
        return this.userService.createUser(createUserDto)
    }

}
