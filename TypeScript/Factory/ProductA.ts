import { IProduct } from "./IProduct";

export class ProductA implements IProduct
{
    public ShipForm(): string
    {
        return " from South Africa";
    }
}