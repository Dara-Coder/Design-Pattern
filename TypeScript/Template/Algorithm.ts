import { IPrimitive } from "./IPrimitives";

export class Algorithm
{
    public TemplateMethod(p: IPrimitive)
    {
        return p.OperationA()+"\n"+p.OperationB();
    }
}