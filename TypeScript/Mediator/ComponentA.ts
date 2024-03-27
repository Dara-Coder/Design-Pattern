import { BaseComponent } from "./BaseComponent";

export class ComponentA extends BaseComponent
{
    public doA(): void
    {
        console.log("Component A does A.");
        this.mediator.notify(this,'A');
    }

    public doB(): void
    {
        console.log("Component A does B.");
        this.mediator.notify(this,'B');
    }
}