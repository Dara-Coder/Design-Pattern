import { Context } from "./Context";
import { FastState } from "./FastState";
import { IState } from "./IState";

export class NormalState implements IState
{
    public MoveDown(ctx: Context): string
    {
        let temp: string = "";
        if(ctx.Counter < ctx.LIMIT)
        {
            ctx.State = new FastState();
            temp += "|| ";
        }
        ctx.Counter -= 2;
        temp += ctx.Counter.toString()+" ";

        return temp;
    }

    public MoveUp(ctx: Context): string
    {
        ctx.Counter += 2;
        return ctx.Counter.toString()+" ";
    }
}