import { Context } from "./Context";
import { IStrategy } from "./IStrategy";

export class StrategyB implements IStrategy
{
    public Move(c: Context): number
    {
        c.Counter--;
        return c.Counter;
    }
}