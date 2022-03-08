import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Entity,Column,PrimaryGeneratedColumn } from 'typeorm';


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

}
