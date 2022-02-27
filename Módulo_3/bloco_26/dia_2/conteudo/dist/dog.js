"use strict";
class Dog {
    constructor(_name, _pelo, _idadde) {
        this._name = _name;
        this._idade = _idadde;
        this._pelo = _pelo;
    }
    lati() {
        console.log(`${this._name} está latindo`);
    }
    idade() {
        if (this._idade > 5)
            console.log(`${this._name} está velho`);
        else {
            console.log(`${this._name} está novo`);
        }
    }
}
const obj1 = new Dog("zeka", "curto", 10);
obj1.lati();
obj1.idade();
