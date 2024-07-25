import { Test, TestingModule } from '@nestjs/testing';
import { MessageServiceService } from './message-service.service';

describe('MessageServiceService', () => {
  let service: MessageServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageServiceService],
    }).compile();

    service = module.get<MessageServiceService>(MessageServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
