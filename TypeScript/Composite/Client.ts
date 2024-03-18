import { Component } from "./Component";
import { Composite } from "./Composite";
import { IComponent } from "./IComponent";

export function Client(): string
{
    const comp: IComponent = new Composite([
        new Component("Morning"),
        new Composite([
            new Component("M1"),
            new Component("M2"),
            new Component("M3")
        ]),
        new Component("Afternoon")
    ]);
    return comp.operation();
}