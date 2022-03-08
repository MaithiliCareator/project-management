import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCostInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
