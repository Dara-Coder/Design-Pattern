export abstract class IHandler
{
    protected m_id: number;
    private successor: IHandler = this;

    public get Id(): number
    {
        return this.m_id;
    }

    public set Id(value: number)
    {
        this.m_id = value;
    }

    public get Successor(): IHandler
    {
        return this.successor;
    }

    public set Successor(value: IHandler)
    {
        this.successor = value;
    }

    public abstract Request(data: number): string;
}