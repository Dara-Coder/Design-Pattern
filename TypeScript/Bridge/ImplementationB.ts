import { IBridge } from "./IBridge";

export class ImplementationB implements IBridge
{
    public operationImp(): string
    {
        return "Implementation B";
    }
}