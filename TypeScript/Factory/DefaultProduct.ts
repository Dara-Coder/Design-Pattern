import { IProduct } from "./IProduct";

export class DefaultProduct implements IProduct
{
    public ShipForm(): string
    {
        return " from N/A";
    }
}