import { IComponent } from "./IComponent";

export class Component implements IComponent
{
    private text: string;

    constructor(text: string)
    {
        this.text = text;
    }
    
    public operation(): string
    {
        return this.text;
    }
}