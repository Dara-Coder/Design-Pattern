export class Receiver
{
    public Action(msg: string): string
    {
        return "Reciever got a message \""+msg+"\"";
    }
}