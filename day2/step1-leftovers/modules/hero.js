import { Person } from "./person.js";

class Hero extends Person{
    static version = 1001;
    // public properties
    title;
    firstname;
    lastname;
    // private properties
    #power = 6;
    constructor(htitle, hfname, hlname, hability){
        super(hability);
        this.title = htitle;
        this.firstname = hfname;
        this.lastname = hlname;
    }
    // public method
    sayname(){
        return this.firstname+" "+this.lastname;
    }
    get power(){
        return this.#power
    }
    set power(npower){
        this.#power = npower;
    };
    // private method
    #saymission(){
        return "save the world"
    }
};

export { Hero }