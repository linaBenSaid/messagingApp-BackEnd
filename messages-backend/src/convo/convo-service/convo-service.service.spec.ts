import { Test, TestingModule } from '@nestjs/testing';
import { ConvoServiceService } from './convo-service.service';

describe('ConvoServiceService', () => {
  let service: ConvoServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConvoServiceService],
    }).compile();

    service = module.get<ConvoServiceService>(ConvoServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
