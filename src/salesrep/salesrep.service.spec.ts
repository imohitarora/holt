import { Test, TestingModule } from '@nestjs/testing';
import { SalesrepService } from './salesrep.service';

describe('SalesrepService', () => {
  let service: SalesrepService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalesrepService],
    }).compile();

    service = module.get<SalesrepService>(SalesrepService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
