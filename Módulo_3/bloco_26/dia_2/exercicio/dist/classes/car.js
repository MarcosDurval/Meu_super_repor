"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = exports.porta = exports.color = void 0;
var color;
(function (color) {
    color[color["preta"] = 0] = "preta";
    color[color["branca"] = 1] = "branca";
    color[color["vermelha"] = 2] = "vermelha";
    color[color["prata"] = 3] = "prata";
})(color = exports.color || (exports.color = {}));
var porta;
(function (porta) {
    porta[porta["direita"] = 0] = "direita";
    porta[porta["esquerda"] = 1] = "esquerda";
})(porta = exports.porta || (exports.porta = {}));
class Car {
    constructor(_brand, _color, _doors) {
        this._brand = _brand;
        this._color = _color;
        this._doors = _doors;
    }
    hook() {
        console.log("Biiiiii");
    }
    openTheDoor(selecPort) {
        console.log(`porta da ${selecPort} aberta`);
    }
    closeTheDoor(selecPort) {
        console.log(`porta da ${selecPort} fechada`);
    }
    turnOn() {
        console.log("Carro ligado");
    }
    turnOff() {
        console.log("Carro desligado");
    }
    speedUp() {
        console.log("Acelerando");
    }
    speedDown() {
        console.log("Desacelerando");
    }
    stop() {
        console.log("carro parado");
    }
    turn(direcao) {
        console.log(`carro ${direcao}`);
    }
}
exports.Car = Car;
