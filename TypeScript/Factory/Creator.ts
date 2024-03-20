import { DefaultProduct } from "./DefaultProduct";
import { IProduct } from "./IProduct";
import { ProductA } from "./ProductA";
import { ProductB } from "./ProductB";

export class Creator
{
    public FactoryMethod(month: number): IProduct
    {
        if(month >= 4 && month <= 11)
        {
            return new ProductA();
        }
        else if(month === 1 || month === 2 || month === 12)
        {
            return new ProductB();
        }
        else
        {
            return new DefaultProduct();
        }
    }
}