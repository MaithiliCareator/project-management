import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Project } from 'src/project/entities/project.entity';
import {Entity,Column,PrimaryGeneratedColumn,OneToOne} from 'typeorm';
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

  @Column({nullable:true})
  @Field({nullable:true})
  projectId: number


@OneToOne(()=>Project,project=>project.cost)
@Field(()=>Project,{nullable:true})
project:Project

}
