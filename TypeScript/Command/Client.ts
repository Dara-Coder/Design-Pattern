import { Command } from "./Command";
import { Invoker } from "./Invoker";
import { Receiver } from "./Reciever";

export class Client
{
    public Process(): string
    {
        const inv: Invoker = new Invoker([
            "Hi reciever!",
            "I wake you up.",
            "Help me to do somthing",
            "Thanks"
        ]);

        inv.Command = new Command(new Receiver());
        return inv.Run();
    }
}