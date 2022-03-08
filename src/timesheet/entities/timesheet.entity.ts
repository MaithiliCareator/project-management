import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@ObjectType()
@Entity()
export class Timesheet {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({nullable:true})
  @Column({nullable:true})
  workinghours:number;

  @Field({nullable:true})
  @Column({nullable:true})
  workingdate:Date;

}
