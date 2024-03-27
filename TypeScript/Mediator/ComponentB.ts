import { BaseComponent } from "./BaseComponent";

export class ComponentB extends BaseComponent
{
    public doC(): void
    {
        console.log("Component B does C.");
        this.mediator.notify(this,'C');
    }

    public doD(): void
    {
        console.log("Component B does D.");
        this.mediator.notify(this,'D');
    }
}