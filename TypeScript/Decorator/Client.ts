import { IComponent } from "./IComponent";

export function client(component: IComponent)
{
    return component.operation();
}