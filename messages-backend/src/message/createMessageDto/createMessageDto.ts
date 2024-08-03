import { IsNotEmpty, IsString } from "class-validator";
import { Entity } from "typeorm";

@Entity()
export class createMessageDto{

    @IsString()
    @IsNotEmpty()
    message: string

    @IsString()
    @IsNotEmpty()
    convo: string 

    @IsString()
    @IsNotEmpty()
    user_msg: string

}