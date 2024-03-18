import { Adaptee } from "./Adaptee";
import { ITarget } from "./ITarget";

export class Adapter extends Adaptee implements ITarget
{
    public Request(i: number): string
    {
        return "Return estimate is "+Math.round(super.SpecificRequest(i, 3)).toString();
    }
}