import { Client } from "./Client";

const client = Client();
const prototypeA = client.prototypeA.GetPrototype();
const prototypeB = client.prototypeB.GetPrototype();

console.log("This is prototype cloned from "+prototypeA.Show()+"\n"+"This is prototype cloned from "+prototypeB.Show());