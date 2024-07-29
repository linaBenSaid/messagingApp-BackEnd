import { Module } from '@nestjs/common';
import { MessageControllerController } from './message-controller/message-controller.controller';
import { MessageServiceService } from './message-service/message-service.service';
import { Message } from './entity/message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [MessageControllerController],
  providers: [MessageServiceService],
  imports: [TypeOrmModule.forFeature([Message])],
})
export class MessageModule {}
