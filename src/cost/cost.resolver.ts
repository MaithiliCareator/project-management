import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CostService } from './cost.service';
import { Cost } from './entities/cost.entity';
import { CreateCostInput } from './dto/create-cost.input';
import { UpdateCostInput } from './dto/update-cost.input';

@Resolver(() => Cost)
export class CostResolver {
  constructor(private readonly costService: CostService) {}

  @Mutation(() => Cost)
  createCost(@Args('createCostInput') createCostInput: CreateCostInput) {
    return this.costService.create(createCostInput);
  }

  @Query(() => [Cost], { name: 'cost' })
  findAll() {
    return this.costService.findAll();
  }

  @Query(() => Cost, { name: 'cost' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.costService.findOne(id);
  }

  @Mutation(() => Cost)
  updateCost(@Args('updateCostInput') updateCostInput: UpdateCostInput) {
    return this.costService.update(updateCostInput.id, updateCostInput);
  }

  @Mutation(() => Cost)
  removeCost(@Args('id', { type: () => Int }) id: number) {
    return this.costService.remove(id);
  }
}
