import { Field, InputType, ID } from 'type-graphql'

import Dummy from './Dummy'

@InputType()
export default class DummyInput implements Partial<Dummy>{
     
    @Field(() => ID)
    id: string;

    @Field()
    dummyField: string
}
