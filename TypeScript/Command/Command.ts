import { ICommand } from "./ICommand";
import { Receiver } from "./Reciever";

export class Command implements ICommand
{
    private result: string = "";
    private reciever: Receiver;

    constructor(rv: Receiver)
    {
        this.reciever = rv;
    }

    public Execute(msg: string): void
    {
        this.result += this.reciever.Action(msg)+"\n";
    }

    public get Result(): string
    {
        return this.result;
    }
}