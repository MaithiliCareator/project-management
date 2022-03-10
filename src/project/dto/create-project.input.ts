import { InputType, Int, Field } from '@nestjs/graphql';
import {Column} from 'typeorm'

@InputType()
export class CreateProjectInput {
  
  @Field({nullable:true})
  @Column({nullable:true})
  projectcode:string;

  @Field({nullable:true})
  @Column({nullable:true})
  projectname:string;

  @Field({nullable:true})
  @Column({nullable:true})
  projectdetails:string;

  @Field({nullable:true})
  @Column({nullable:true})
 clientId:number;

}
