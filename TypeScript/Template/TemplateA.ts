import { IPrimitive } from "./IPrimitives";

export class TemplateA implements IPrimitive
{
    public OperationA(): string
    {
        return "A: Operation A";
    }
    
    public OperationB(): string
    {
        return "A: Operation B";
    }
}