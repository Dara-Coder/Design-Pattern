import { IBuilder } from "./IBuilder";

export class Director
{
    public Construct(builder: IBuilder)
    {
        builder.BuildPartA();
        builder.BuildPartB();
        builder.BuildPartC();
    }
}