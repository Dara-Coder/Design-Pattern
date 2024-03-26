import { IObserver } from "./IObserver";
import { Subject } from "./Subject";

export class Observer implements IObserver
{
    private _name: string = "";
    private _state: string = "";
    private _gap: string = "";
    private _subject: Subject;

    constructor(_subject: Subject, name: string, gap: string)
    {
        this._subject = _subject;
        this._name = name;
        this._gap = gap;
        if(this._subject !== null) this._subject.Notify = this.Update;
    }

    public Update(state: string)
    {
        this._state = state;
        console.log(this._gap+this._name+" : "+this._state+"\n");
    }
}