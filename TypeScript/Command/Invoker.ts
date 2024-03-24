import { ICommand } from "./ICommand";

export class Invoker
{
    private messages: Array<string>;
    private self: ICommand;

    public constructor(msgs: Array<string>)
    {
        this.messages = msgs;
        this.messages = [...this.messages];
    }

    public get Command(): ICommand
    {
        return this.self;
    }

    public set Command(self: ICommand)
    {
        this.self = self;
    }

    public Run(): string
    {
        if(this.Command === null)
        {
            return "";
        }

        this.messages.forEach(msg => {
            this.Command.Execute(msg);
        });

        return this.Command.Result;
    }
}