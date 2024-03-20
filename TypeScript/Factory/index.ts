import { Client } from "./Client";

const client = new Client();
const source = client.GenerateSource();

source.forEach(p => {
    console.log("Avocado"+p.ShipForm()); 
});