import { IPrototype } from "./IPrototype";

export class PrototypeManager
{
    private prototype: IPrototype;

    constructor(prototype: IPrototype)
    {
        this.prototype = prototype;
    }

    public GetPrototype(): IPrototype
    {
        return this.prototype.Clone();
    }
}