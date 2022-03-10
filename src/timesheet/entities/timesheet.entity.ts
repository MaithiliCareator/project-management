import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Employee } from 'src/employee/entities/employee.entity';
import { Project } from 'src/project/entities/project.entity';

import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  ManyToOne,
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

  @OneToOne(()=>Employee,employee=>employee.timesheet)
  @Field(()=>Employee,{nullable:true})
  employee:Employee

  @ManyToOne(()=>Project,project=>project.timesheets)
  @Field(()=>Project,{nullable:true})
  project:Project
}
