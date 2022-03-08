import { InputType, Int, Field } from '@nestjs/graphql';
import {Column} from 'typeorm'
@InputType()
export class CreateClientInput {
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
