import { Resolver, Query, Mutation, Subscription, Root, PubSub, Publisher, Arg } from 'type-graphql'

import { Service } from 'typedi'

import Dummy from './Dummy'
import DummyInput from './DummyInput';
import DummyService from './DummyService'
export const DUMMY_SUBSCRIPTION = 'DUMMY_SUBSCRIPTION';


@Service()
@Resolver(Dummy)
export default class DummyResolver {
    constructor(private readonly dummyService: DummyService) { }

    @Subscription({
        topics: DUMMY_SUBSCRIPTION
    })
    dummyNotification(@Root() payload: DummyInput): Dummy {
        return payload;
    }

    @Query(returns => Dummy)
    async dummy() {
        return this.dummyService.getDummy();
    }

    @Mutation(returns => Boolean)
    async createDummy(@Arg("dummy") dummyInput: DummyInput, @PubSub(DUMMY_SUBSCRIPTION) publish:Publisher<DummyInput>){
        await publish(dummyInput)
        return true;
    }
}