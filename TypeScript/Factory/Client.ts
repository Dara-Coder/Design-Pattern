import { Creator } from "./Creator";
import { IProduct } from "./IProduct";

export class Client
{
    public GenerateSource(): IProduct[]
    {
        const source: Array<IProduct> = [];
        const creator: Creator = new Creator();

        for(let i: number = 0; i < 12; i++)
        {
            source.push(creator.FactoryMethod(i+1));
        }

        return source;
    }
}