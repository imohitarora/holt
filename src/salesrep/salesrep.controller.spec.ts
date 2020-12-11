import { Test, TestingModule } from '@nestjs/testing';
import { SalesrepController } from './salesrep.controller';

describe('Salesrep Controller', () => {
  let controller: SalesrepController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalesrepController],
    }).compile();

    controller = module.get<SalesrepController>(SalesrepController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
