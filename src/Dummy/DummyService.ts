import { Inject, Service } from 'typedi'
import Dummy from './Dummy'

@Service()
export default class DummyService implements DummyService{
    constructor(@Inject('dummy') private readonly dummyStr){}

    getDummy():Dummy{
        return new Dummy(this.dummyStr)
    }
}