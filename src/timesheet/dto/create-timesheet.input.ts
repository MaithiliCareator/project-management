import { InputType, Int, Field } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@InputType()
export class CreateTimesheetInput {
  @Field({nullable:true})
  @Column({nullable:true})
  workinghours:number;

  @Field({nullable:true})
  @Column({nullable:true})
  workingdate:Date;

}
