"use strict";
class Tvs {
    constructor(b, s, r, c, connectedTo) {
        this._connections = c;
        this._brand = b;
        this._size = s;
        this._resolution = r;
        this._connectedTo = connectedTo;
    }
    turnOn() {
        console.log(`
      marca ${this._brand},
      tamanho ${this._size} polegadas
      resolução ${this._resolution}
      tem as seguintes conexões ${this._connections}
    `);
    }
    get connectedTo() {
        if (this._connections.includes(this._connectedTo)) {
            return this._connectedTo;
        }
        else {
            return "Sorry, connection unavailable!";
        }
    }
    set connectedTo(connectedTo) {
        if (this._connections.includes(connectedTo)) {
            this._connectedTo = connectedTo;
        }
        else {
            console.log("Sorry, connection unavailable!");
        }
    }
}
const tv1 = new Tvs("toshiba", 40, 1080, ["HDMI", "Ethernet"], 'xablau');
tv1.turnOn();
tv1.connectedTo = "HDMI";
console.log("connect:", tv1.connectedTo);
