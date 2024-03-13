import { IBridge } from './IBridge';

export class Abstraction
{
    protected implementation: IBridge;

    constructor(implementation: IBridge)
    {
        this.implementation = implementation;
    }

    public operation(): string
    {
        return 'Abstraction: Base operation with: '+this.implementation.operationImp();
    }
}