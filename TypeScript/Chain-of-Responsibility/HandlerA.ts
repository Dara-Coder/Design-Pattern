import { IHandler } from "./IHandler";

export class HandlerA extends IHandler
{
    public readonly FACTOR: number = 1000;
    protected m_limit: number = 0;

    constructor(id: number, successor: IHandler)
    {
        super();
        this.Id = id;
        this.m_limit = this.Id * this.FACTOR;
        this.Successor = successor;
    }

    public Request(data: number): string
    {
        if(data < this.m_limit)
        {
            return "Request for "+data+" handled at level "+this.Id;
        }
        else if(this.Successor !== null && this.Successor !== undefined)
        {
            return this.Successor.Request(data);
        }
        else
        {
            return "Request for "+data+" by DEFAULT at level "+this.Id;
        }
    }
}