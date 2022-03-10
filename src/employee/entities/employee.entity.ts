import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Client } from 'src/client/entities/client.entity';
import { Project } from 'src/project/entities/project.entity';
import { Timesheet } from 'src/timesheet/entities/timesheet.entity';
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

  @Field({nullable:true})
  @Column({nullable:true})
  designation:string;
 
  @Column({nullable:true})
  @Field({nullable:true})
  projectId: number

  @Column({nullable:true})
  @Field({nullable:true})
  clientId: number

  
  @Column({nullable:true})
  @Field({nullable:true})
  timesheetId: number

  @OneToOne(()=>Client,client=>client.employee)
  @Field(()=>Client,{nullable:true})
  client:Client

  @ManyToOne(() => Project, project => project.employees)
  @Field(() => Project,{nullable:true})
  project: Project

  @OneToOne(()=>Timesheet,timesheet=>timesheet.employee)
  @Field(()=>Timesheet,{nullable:true})
  timesheet:Timesheet

}
