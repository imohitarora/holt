import { Test, TestingModule } from '@nestjs/testing';
import { VenderController } from './vender.controller';

describe('Vender Controller', () => {
  let controller: VenderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VenderController],
    }).compile();

    controller = module.get<VenderController>(VenderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
