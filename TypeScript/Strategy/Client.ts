import { Context } from "./Context";

export class Client
{
    public Process(): string
    {
        let sb: string = "";
        const context: Context = new Context();
        context.SwitchStrategy();
        const r: number = Math.floor(Math.random() * 3) + 1;

        for(let i: number = context.Start; i < context.Start + 15; i++)
        {
            if(r === 2)
            {
                sb += "|| ";
                context.SwitchStrategy();
            }
            sb += context.Algorithm().toString()+" ";
        }

        return sb;
    }
}