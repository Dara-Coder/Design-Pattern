import { IPrimitive } from "./IPrimitives";

export class TemplateB implements IPrimitive
{
    public OperationA(): string
    {
        return "B: Template A";
    }

    public OperationB(): string
    {
        return "B: Template B";
    }
}