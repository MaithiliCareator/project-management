import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Cost {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
