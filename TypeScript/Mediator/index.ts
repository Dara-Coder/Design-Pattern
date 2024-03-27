import { ComponentA } from "./ComponentA";
import { ComponentB } from "./ComponentB";
import { ConcreteMediator } from "./ConcreteMediator";

const cA = new ComponentA();
const cB = new ComponentB();
const mediator = new ConcreteMediator(cA,cB);

console.log("Client triggers operation A");
cA.doA();

console.log("\nClient triggers operation D.");
cB.doD();