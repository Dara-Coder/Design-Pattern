import { Simulator } from "./Simulator";
import { Observer } from "./Observer";

export class Subject
{
    public Notify: any = null;
    private simulator: Simulator = new Simulator();
    _state: string = "";

    public Run()
    {
        let sb: string = "";
        this.simulator.GetMoves().forEach(s => {
            sb += "Subject: "+s+"\n";
            this._state = s;
            const observer = new Observer(this,s,(parseInt(s)+300).toString());
            if(this.Notify !== null)
            {
                this.Notify(this._state);
            }
        });
        return sb;
    }
}