import { ConcreteSubject } from "./ConcreteSubject";
import { IObserver } from "./IObserver";
import { ISubject } from "./ISubject";

export class ConcreteObserverB implements IObserver
{
    public update(subject: ISubject)
    {
        if(subject instanceof ConcreteSubject && (subject.state === 0 || subject.state >= 2))
        {
            console.log("ConcreteObserverB: Reacted to the event.");
        }
    }
}