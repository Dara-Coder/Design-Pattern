export interface ICommand
{
    Result: string;
    Execute(msg: string): void;
}