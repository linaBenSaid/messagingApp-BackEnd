import { Test, TestingModule } from '@nestjs/testing';
import { ConvoControllerController } from './convo-controller.controller';

describe('ConvoControllerController', () => {
  let controller: ConvoControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConvoControllerController],
    }).compile();

    controller = module.get<ConvoControllerController>(ConvoControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
