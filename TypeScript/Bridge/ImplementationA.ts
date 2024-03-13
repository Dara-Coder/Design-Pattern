import { IBridge } from "./IBridge";

export class ImplementationA implements IBridge
{
    public operationImp(): string
    {
        return "Implementation A";
    }
}