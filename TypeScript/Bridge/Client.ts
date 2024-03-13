import { Abstraction } from "./Abstraction";

export function Client(abstraction: Abstraction)
{
    return abstraction.operation();
}