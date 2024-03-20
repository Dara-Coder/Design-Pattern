export class Product
{
    private parts: string[] = [];

    public Add(part: string): void
    {
        this.parts.push(part);
    }

    public GetDisplay(): string
    {
        let b: string = "Product Parts ...\n";
        this.parts.forEach(part => {
           b += part+"\n"; 
        });

        return b;
    }
}