import { Abstraction } from './Abstraction';

export class ExtendedAbstraction extends Abstraction
{
    public operation(): string
    {
        return 'ExtendedAbstraction: Extended operation with: '+this.implementation.operationImp();
    }
}