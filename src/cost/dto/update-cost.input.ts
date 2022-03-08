import { CreateCostInput } from './create-cost.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCostInput extends PartialType(CreateCostInput) {
  @Field(() => Int)
  id: number;
}
