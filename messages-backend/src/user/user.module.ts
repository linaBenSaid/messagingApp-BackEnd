import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UserServiceService } from './user-service/user-service.service';
import { UserControllerController } from './user-controller/user-controller.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';

@Module({
  providers: [UserServiceService],
  controllers: [UserControllerController],
  imports: [TypeOrmModule.forFeature([User])],
})
export class UserModule {
  constructor(private dataSource: DataSource) {}
}
