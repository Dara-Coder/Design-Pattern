import { BuilderA } from "./BuilderA";
import { Director } from "./Director";
import { BuilderB } from "./BuilderB";

export class Client
{
    public Process(): string
    {
        let sb: string = "";
        const d: Director = new Director();

        const builderA = new BuilderA();
        d.Construct(builderA);
        sb += builderA.GetResult().GetDisplay();

        const builderB = new BuilderB();
        d.Construct(builderB);
        sb += "\n"+builderB.GetResult().GetDisplay();

        return sb;
    }
}