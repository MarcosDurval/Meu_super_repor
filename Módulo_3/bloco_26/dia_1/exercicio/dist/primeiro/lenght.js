"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capacity = exports.massa = exports.convert = void 0;
const utils = ['mm', 'cm', 'dm', 'm', 'dam', 'hm', 'km',];
//consultei o gabarito
function convert(valor, unidadeB, unidadeC) {
    const indexB = utils.indexOf(unidadeB);
    const indexC = utils.indexOf(unidadeC);
    const expoente = indexB - indexC;
    return valor * Math.pow(10, expoente);
}
exports.convert = convert;
const mass = ['mg', 'cg', 'dg', 'g', 'dag', 'hg', 'kg'];
function massa(valor, unidadeB, unidadeC) {
    const indexB = mass.indexOf(unidadeB);
    const indexC = mass.indexOf(unidadeC);
    const expoente = indexB - indexC;
    console.log(expoente);
    console.log(Math.pow(10, expoente));
    return valor * Math.pow(10, expoente);
}
exports.massa = massa;
const cap = ["ml", "cl", "dl", "l", "dal", "hl", "kl"];
function capacity(valor, unidadeB, unidadeC) {
    const indexB = cap.indexOf(unidadeB);
    const indexC = cap.indexOf(unidadeC);
    const expoente = indexB - indexC;
    return valor * Math.pow(10, expoente);
}
exports.capacity = capacity;
