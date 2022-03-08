import { Test, TestingModule } from '@nestjs/testing';
import { CostResolver } from './cost.resolver';
import { CostService } from './cost.service';

describe('CostResolver', () => {
  let resolver: CostResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CostResolver, CostService],
    }).compile();

    resolver = module.get<CostResolver>(CostResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
