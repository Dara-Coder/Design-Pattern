import { ConcreteObserverA } from "./ConcreteObserverA";
import { ConcreteObserverB } from "./ConcreteObserverB";
import { ConcreteSubject } from "./ConcreteSubject";

const subject = new ConcreteSubject();

const observerA = new ConcreteObserverA();
subject.attach(observerA);

const observerB = new ConcreteObserverB();
subject.attach(observerB);

subject.someBusinessLogic();
subject.someBusinessLogic();

subject.detach(observerB);
subject.someBusinessLogic();