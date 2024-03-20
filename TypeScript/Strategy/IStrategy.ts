import { Context } from "./Context";

export interface IStrategy
{
    Move(c: Context): number;
}