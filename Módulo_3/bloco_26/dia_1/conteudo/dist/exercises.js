"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circle = exports.trapezio = exports.losango = exports.sumArray = exports.add = exports.personAge = exports.geeter = void 0;
function geeter(name) {
    return `Olá ${name}`;
}
exports.geeter = geeter;
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
const add = (x, y) => {
    return x + y;
};
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(exports.add, 0);
}
exports.sumArray = sumArray;
function losango(Dezao, dezinho) {
    return (Dezao * dezinho) / 2;
}
exports.losango = losango;
function trapezio(bezao, bezinho, height) {
    return ((bezao + bezinho) * height);
}
exports.trapezio = trapezio;
function circle(raio) {
    const c = raio ** 2;
    const PI = 3.14;
    return PI * c;
}
exports.circle = circle;
// export function triagle(base:number,height:number)
