import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm';
@ObjectType()
@Entity()
export class Cost {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({nullable:true})
  @Column({nullable:true})
  paidamount:number;

  @Field({nullable:true})
  @Column({nullable:true})
  paiddate:Date;

}
