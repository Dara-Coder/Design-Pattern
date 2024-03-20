import { Product } from "./Product";

export interface IBuilder
{
    BuildPartA(): void;
    BuildPartB(): void;
    BuildPartC(): void;
    GetResult(): Product;
}