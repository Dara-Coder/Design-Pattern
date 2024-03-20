import { IPrototype } from "./IPrototype";

export class PrototypeA implements IPrototype
{
    private name: string;
    
    constructor(name: string)
    {
        this.name = name;
    }

    public Clone(): IPrototype
    {
        return new PrototypeA(this.name);
    }

    public Show(): string
    {
        return this.name;
    }
}