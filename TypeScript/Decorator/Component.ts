import { IComponent } from "./IComponent";

export class Component implements IComponent
{
    public addedState: string;

    public operation(): string
    {
        return 'I am walking';
    }

    public addedBehaviour(): string
    {
        return '';
    }
}