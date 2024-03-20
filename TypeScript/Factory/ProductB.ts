import { IProduct } from "./IProduct";

export class ProductB implements IProduct
{
    public ShipForm(): string
    {
        return " from Spain";
    }
}