"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car_1 = require("./car");
var direcao;
(function (direcao) {
    direcao["esquerda"] = "vire \u00E0 esquerda";
    direcao["direita"] = "vire \u00E0 direita";
})(direcao || (direcao = {}));
const carrinho = new car_1.Car("volkswagen", car_1.color.prata, 4);
carrinho.turnOn();
carrinho.openTheDoor(car_1.porta.direita);
