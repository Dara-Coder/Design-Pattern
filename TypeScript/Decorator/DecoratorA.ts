import { Decorator } from "./Decorator";

export class DecoratorA extends Decorator
{
    public operation(): string
    {
        return super.operation()+" and listening to Classic FM";
    }
}