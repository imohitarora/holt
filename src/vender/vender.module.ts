import { Module } from '@nestjs/common';
import { VenderController } from './vender.controller';
import { VenderService } from './vender.service';

@Module({
  controllers: [VenderController],
  providers: [VenderService]
})
export class VenderModule {}
