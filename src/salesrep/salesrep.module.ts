import { Module } from '@nestjs/common';
import { SalesrepController } from './salesrep.controller';
import { SalesrepService } from './salesrep.service';

@Module({
  controllers: [SalesrepController],
  providers: [SalesrepService]
})
export class SalesrepModule {}
