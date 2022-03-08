import { Module } from '@nestjs/common';
import { CostService } from './cost.service';
import { CostResolver } from './cost.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cost } from './entities/cost.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Cost])],
  providers: [CostResolver, CostService]
})
export class CostModule {}
