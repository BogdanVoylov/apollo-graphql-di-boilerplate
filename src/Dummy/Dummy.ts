import { ObjectType, Field, ID } from "type-graphql";
import { Inject } from "typedi";

@ObjectType({ description: 'Dummy object' })
export default class Dummy {
    
    @Field(() => ID)
    id: string;

    @Field()
    dummyField: string

    constructor(dummyField:string){
        this.dummyField = dummyField
    }
}