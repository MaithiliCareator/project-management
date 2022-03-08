import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { Entity,Column,PrimaryGeneratedColumn} from 'typeorm';

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


}
