import { PrototypeA } from "./PrototypeA";
import { PrototypeB } from "./PrototypeB";
import { PrototypeManager } from "./PrototypeManager";

export function Client(): any
{
    const prototypeA = new PrototypeA("Prototype A");
    const prototypeACloned = new PrototypeManager(prototypeA);

    const prototypeB = new PrototypeB("Prototype B",9);
    const prototypeBCloned = new PrototypeManager(prototypeB);

    return {
        prototypeA: prototypeACloned,
        prototypeB: prototypeBCloned
    };
}