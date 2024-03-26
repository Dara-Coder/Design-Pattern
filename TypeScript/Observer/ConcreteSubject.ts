import { IObserver } from "./IObserver";
import { ISubject } from "./ISubject";

export class ConcreteSubject implements ISubject
{
    public state: number;
    private observers: IObserver[] = [];

    public attach(observer: IObserver): void
    {
        const isExist = this.observers.includes(observer);
        if(isExist)
        {
            return console.log("Subject: Observer has been attached already.");
        }

        console.log("Subject: Attach an observer.");
        this.observers.push(observer);
    }

    public detach(observer: IObserver): void
    {
        const observerIndex = this.observers.indexOf(observer);
        if(observerIndex === -1)
        {
            return console.log("Subject: Nonexistent observer.");
        }

        this.observers.splice(observerIndex, 1);
        console.log("Subject: Detached an observer.");
    }

    public notify(): void
    {
        console.log("Subject: Notify observers...");
        for(const observer of this.observers)
        {
            observer.update(this);
        }
    }

    public someBusinessLogic(): void
    {
        console.log('\nSubject: I\'m doing something important.');
        this.state = Math.floor(Math.random() * (10 + 1));

        console.log("Subject: My state has just changed to: "+this.state);
        this.notify();
    }
}