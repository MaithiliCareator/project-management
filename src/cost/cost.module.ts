import { Module } from '@nestjs/common';
import { CostService } from './cost.service';
import { CostResolver } from './cost.resolver';

@Module({
  providers: [CostResolver, CostService]
})
export class CostModule {}
