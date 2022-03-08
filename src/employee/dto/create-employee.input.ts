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
export class CreateEmployeeInput {
  @Field({nullable:true})
  @Column({nullable:true})
  employeeid:string;

  @Field({nullable:true})
  @Column({nullable:true,length:100,unique:true})
  mobile:string;

  @Field({nullable:true})
  @Column({nullable:true})
  email:string;
  
}
