import { IComponent } from "./IComponent";

export function client(component: IComponent): string
{
    return component.operation();
}