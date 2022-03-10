import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Client } from 'src/client/entities/client.entity';
import { Cost } from 'src/cost/entities/cost.entity';
import { Employee } from 'src/employee/entities/employee.entity';
import { Timesheet } from 'src/timesheet/entities/timesheet.entity';
import { Entity,Column,PrimaryGeneratedColumn,OneToMany,OneToOne,ManyToOne } from 'typeorm';


@ObjectType()
@Entity()
export class Project {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({nullable:true})
  @Column({nullable:true})
  projectcode:string;

  @Field({nullable:true})
  @Column({nullable:true})
  projectname:string;

  @Field({nullable:true})
  @Column({nullable:true})
  projectdetails:string;

  @Column({nullable:true})
  @Field({nullable:true})
  clientId: number


  @ManyToOne(() => Client, client => client.project)
  @Field(() => Client, { nullable: true })
  client: Client

  @OneToMany(()=>Employee,employee=>employee.project)
  @Field(()=>[Employee],{nullable:true})
  employees:Employee[]

  @ManyToOne(() => Cost, cost => cost.project)
  @Field(() => Cost, { nullable: true })
  cost: Cost

  @OneToMany(()=>Timesheet,timesheet=>timesheet.project)
  @Field(()=>[Timesheet],{nullable:true})
  timesheets:Timesheet[]
  
}
