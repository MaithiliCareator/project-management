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
export class Employee {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

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
