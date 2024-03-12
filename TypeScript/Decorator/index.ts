import { Component } from "./Component";
import { client } from "./Client";
import { DecoratorA } from "./DecoratorA";
import { DecoratorB } from "./DecoratorB";

const simple = new Component();
console.log('1. Basic component: '+client(simple)+'\n');

const decoratorA = new DecoratorA(simple);
console.log('2. Decorator A: '+client(decoratorA)+'\n');

const decoratorB = new DecoratorB(simple);
console.log('3. Decorator B: '+client(decoratorB)+'\n');

const decoratorBA = new DecoratorB(decoratorA);
console.log('4. Decorator B-A: '+client(decoratorBA)+'\n');

const decoratorAB = new DecoratorA(decoratorB);
console.log('5. Decorator A-B: '+client(decoratorAB)+decoratorAB.addedBehaviour()+'\n');