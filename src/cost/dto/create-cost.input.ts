import { InputType, Int, Field } from '@nestjs/graphql';
import {Column} from 'typeorm';
@InputType()
export class CreateCostInput {
  @Field({nullable:true})
  @Column({nullable:true})
  paidamount:number;

  @Field({nullable:true})
  @Column({nullable:true})
  paiddate:Date;
}
