import { Context } from "./Context";
import { NormalState } from "./NormalState";

export class Client
{
    private ct: Context;

    public Process(): string
    {
        this.Run();
        return this.ct.Info;
    }
    
    private Run(): void
    {
        this.ct = new Context();
        this.ct.State = new NormalState();
        const r: number = Math.floor(Math.random() * 3) + 1;

        for(let k: number = 5; k <= 25; k++)
        {
            this.ct.Request(r);
        }
    }
}