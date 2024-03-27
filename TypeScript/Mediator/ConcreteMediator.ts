import { IMediator } from "./IMediator";
import { ComponentA } from "./ComponentA";
import { ComponentB } from "./ComponentB";

export class ConcreteMediator implements IMediator
{
    private componentA: ComponentA;
    private componentB: ComponentB;

    constructor(cA: ComponentA, cB: ComponentB)
    {
        this.componentA = cA;
        this.componentA.setMediator(this);
        this.componentB = cB;
        this.componentB.setMediator(this);
    }

    public notify(sender: object, event: string)
    {
        if(event === "A")
        {
            console.log("Mediator reacts on A and triggers following operations:");
            this.componentB.doC();
        }

        if(event === "D")
        {
            console.log("Mediator reacts on D and triggers following operations:");
            this.componentA.doB();
            this.componentB.doC();
        }
    }
}