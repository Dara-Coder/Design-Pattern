import { IComponent } from "./IComponent";

export class Decorator implements IComponent
{
    private component: IComponent;
    public addedState: string;

    constructor(component: IComponent)
    {
        this.component = component;
    }

    public addedBehaviour(): string
    {
        return this.component.addedBehaviour();
    }

    public operation(): string
    {
        return this.component.operation();
    }
}