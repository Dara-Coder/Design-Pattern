import { Algorithm } from "./Algorithm";
import { TemplateA } from "./TemplateA";
import { TemplateB } from "./TemplateB";

export class Client
{
    public Process(): string
    {
        let msg: string = "";
        const al: Algorithm = new Algorithm();
        msg += al.TemplateMethod(new TemplateA())+"\n\n"+al.TemplateMethod(new TemplateB());

        return msg;
    }
}