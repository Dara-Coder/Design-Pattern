import { Abstraction } from "./Abstraction";

export function Client(abstraction: Abstraction): string
{
    return abstraction.operation();
}