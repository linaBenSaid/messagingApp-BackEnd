import { Module } from '@nestjs/common';
import { ConvoServiceService } from './convo-service/convo-service.service';
import { ConvoControllerController } from './convo-controller/convo-controller.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Convo } from './entity/convo.entity';

@Module({
  providers: [ConvoServiceService],
  controllers: [ConvoControllerController],
  imports: [TypeOrmModule.forFeature([Convo])],
})
export class ConvoModule {}
