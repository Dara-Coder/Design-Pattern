import { Abstraction } from "./Abstraction";
import { Client } from "./Client";
import { ExtendedAbstraction } from "./ExtendAbstraction";
import { ImplementationA } from "./ImplementationA";
import { ImplementationB } from "./ImplementationB";

let implementation = new ImplementationA();
let abstraction = new Abstraction(implementation);
let extendsAbstraction = new ExtendedAbstraction(implementation);
console.log(Client(abstraction)+'\n'+Client(extendsAbstraction)+'\n');

implementation = new ImplementationB();
abstraction = new Abstraction(implementation);
extendsAbstraction = new ExtendedAbstraction(implementation);
console.log(Client(abstraction)+'\n'+Client(extendsAbstraction));