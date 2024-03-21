import { IState } from "./IState";

export class Context
{
    public readonly LIMIT: number = 10;
    private counter: number = this.LIMIT;
    private state: IState;
    private info: string = "";
    
    public get Info(): string
    {
        return this.info;
    }

    public Request(n: number): void
    {
        if(n === 2)
        {
            this.info += this.State.MoveUp(this);
        }
        else
        {
            this.info += this.State.MoveDown(this);
        }
    }

    public get Counter(): number
    {
        return this.counter;
    }

    public set Counter(value: number)
    {
        this.counter = value;
    }

    public get State(): IState
    {
        return this.state;
    }

    public set State(value: IState)
    {
        this.state = value;
    }
}