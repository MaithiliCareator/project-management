import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { Employee } from 'src/employee/entities/employee.entity';
import { Project } from 'src/project/entities/project.entity';
import { Entity,Column,PrimaryGeneratedColumn,OneToOne,OneToMany} from 'typeorm';

@ObjectType()
@Entity()
export class Client {
 @Field(()=>ID)
 @PrimaryGeneratedColumn()
 id:number;

 @Field({nullable:true})
 @Column({nullable:true})
 clientname:string;

 @Field({nullable:true})
 @Column({nullable:true})
 email:string;

 @Field({nullable:true})
 @Column({nullable:true,length:100,unique:true})
 mobile:string;

@OneToOne(()=>Employee,employee=>employee.client)
@Field(()=>Employee,{nullable:true})
employee:Employee

@OneToMany(()=>Project,project=>project.client)
@Field(()=>Project,{nullable:true})
project:Project
}
