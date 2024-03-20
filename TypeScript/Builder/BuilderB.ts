import { IBuilder } from "./IBuilder";
import { Product } from "./Product";

export class BuilderB implements IBuilder
{
    private p: Product = new Product();

    public BuildPartA(): void
    {
        this.p.Add("Part A");
    }

    public BuildPartB(): void
    {
        this.p.Add("Part B");
    }

    public BuildPartC(): void
    {
        this.p.Add("Part C");
    }

    public GetResult(): Product
    {
        return this.p;
    }
}