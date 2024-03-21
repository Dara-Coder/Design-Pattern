import { Context } from "./Context";

export interface IState
{
    MoveUp(ctx: Context): string;
    MoveDown(ctx: Context): string;
}