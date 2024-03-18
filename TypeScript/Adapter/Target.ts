import { ITarget } from "./ITarget";

export class Target implements ITarget
{
    public Request(i: number): string
    {
        return "Request "+i.toString();
    }
}