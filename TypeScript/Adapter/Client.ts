import { Adaptee } from "./Adaptee";
import { Adapter } from "./Adapter";
import { ITarget } from "./ITarget";

export function Client(): string
{
    const first: Adaptee = new Adaptee();
    let sb: string = "";

    sb += "Before the new standard\n";
    sb += "Pricise Reading: ";
    sb += first.SpecificRequest(5,3).toString()+"\n";

    const second: ITarget = new Adapter();
    sb += "Moving to the new standard\n";
    sb += second.Request(5).toString();

    return sb.toString();
}