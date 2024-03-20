import { StrategyA } from "./StrategyA";
import { StrategyB } from "./StrategyB";
import { IStrategy } from "./IStrategy";

export class Context
{
    public readonly Start: number = 5;
    public Counter: number = 5;
    private strategy: IStrategy = new StrategyA();

    public Algorithm(): number
    {
        return this.strategy.Move(this);
    }

    public SwitchStrategy(): void
    {
        if(this.strategy instanceof StrategyA)
        {
            this.strategy = new StrategyB();
        }
        else
        {
            this.strategy = new StrategyA();
        }
    }
}