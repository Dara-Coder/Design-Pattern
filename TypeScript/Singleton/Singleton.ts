export class Singleton
{
    private static instance: Singleton;
    public value: number;

    constructor()
    {}

    public static CreateInstance(): Singleton
    {
        if(!Singleton.instance)
        {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}