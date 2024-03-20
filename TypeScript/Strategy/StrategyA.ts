import { Context } from "./Context";
import { IStrategy } from "./IStrategy";

export class StrategyA implements IStrategy
{
    public Move(c: Context): number
    {
        c.Counter++;
        return c.Counter;
    }
}