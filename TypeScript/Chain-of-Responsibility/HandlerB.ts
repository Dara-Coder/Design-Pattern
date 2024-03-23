import { IHandler } from "./IHandler";

export class HandlerB extends IHandler
{
    private m_rmdigit: Array<number> = [0, 5, 9];

    constructor(id: number, successor: IHandler)
    {
        super();
        this.Id = id;
        this.Successor = successor;
    }

    public Request(data: number): string
    {
        if(this.m_rmdigit.includes(data % 10))
        {
            return "Level "+this.Id+" handles a request for "+data;
        }
        else if(this.Successor !== null && this.Successor !== undefined)
        {
            return this.Successor.Request(data);
        }
        else
        {
            return "Level "+this.Id+" handles by DEFAULT, a request for "+data;
        }
    }
}