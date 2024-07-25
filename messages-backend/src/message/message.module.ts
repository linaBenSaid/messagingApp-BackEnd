import { Module } from '@nestjs/common';
import { MessageControllerController } from './message-controller/message-controller.controller';
import { MessageServiceService } from './message-service/message-service.service';

@Module({
  controllers: [MessageControllerController],
  providers: [MessageServiceService]
})
export class MessageModule {}
