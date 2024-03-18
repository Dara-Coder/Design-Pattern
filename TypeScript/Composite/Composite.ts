import { IComponent } from "./IComponent";

export class Composite implements IComponent
{
    private list: Array<IComponent> = [];

    constructor(list: Array<IComponent>)
    {
        this.list = list;
    }

    public operation(): string
    {
        if(this.list.length === 0)
        {
            throw new Error("No Component");
        }
        else
        {
            let temp: string = "";
            for(let comp of this.list)
            {
                if(temp === "")
                {
                    temp = "[ ";
                }
                else
                {
                    temp += ", ";
                }
                temp += comp.operation();
            }
            temp += " ]";
            return temp;
        }
    }
}