import { IPrototype } from "./IPrototype";

export class PrototypeB implements IPrototype
{
    private value: number;
    private name: string;

    constructor(name: string, value: number)
    {
        this.name = name;
        this.value = value;
    }

    public Clone(): IPrototype
    {
        return new PrototypeB(this.name,this.value);
    }

    public Show(): string
    {
        return this.name+" and has value equal to "+this.value;
    }
}