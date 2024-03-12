import { Decorator } from "./Decorator";

export class DecoratorB extends Decorator
{
    public addedState: string = " past the coffee shop";

    public operation(): string
    {
        return super.operation()+" to school";
    }

    public addedBehaviour(): string
    {
        return this.addedState+" and I bought a cappuccino";
    }
}