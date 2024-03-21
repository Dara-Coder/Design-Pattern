import { IState } from "./IState";
import { Context } from "./Context";
import { NormalState } from "./NormalState";

export class FastState implements IState
{
    public MoveUp(ctx: Context): string
    {
        ctx.Counter += 5;
        return ctx.Counter.toString()+" ";
    }

    MoveDown(ctx: Context): string
    {
        let temp: string = "";
        if(ctx.Counter < ctx.LIMIT)
        {
            ctx.State = new NormalState();
            temp += " || ";
        }
        ctx.Counter -= 5;
        temp += ctx.Counter.toString()+" ";
        
        return temp;
    }
}