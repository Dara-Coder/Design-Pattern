import { HandlerA } from "./HandlerA";
import { HandlerB } from "./HandlerB";
import { IHandler } from "./IHandler";

export class Client
{
    private start: IHandler;

    public Process(): string
    {
        let sb: string = "";
        for(let i: number = 5; i > 1; i--)
        {
            if(i % 2 === 0)
            {
                this.start = new HandlerB(i, this.start);
            }
            else
            {
                this.start = new HandlerA(i, this.start);
            }
        }

        const arr: Array<number> = [50, 2000, 1500, 10009, 175];
        arr.forEach(data => {
            if(this.start !== undefined)
            {
                sb += this.start.Request(data)+"\n";
                this.start = this.start.Successor;
            }
        });

        return sb;
    }
}