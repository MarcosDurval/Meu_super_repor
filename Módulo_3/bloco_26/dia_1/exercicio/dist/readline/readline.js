"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
const funcao = __importStar(require("../primeiro/lenght"));
const opcao = ['comprimento', 'massa', 'capacity', 'area'];
function agrupamento() {
    const name = readlineSync.keyInSelect(opcao, { cancel: "SAIR" });
    if (name === -1)
        return console.log("saindo");
    const valor = readlineSync.questionFloat('valor: ', { cancel: "SAIR" });
    const unidadeB = readlineSync.question('unidade base ', { cancel: "SAIR" });
    const unidadeC = readlineSync.question('unidade c ', { cancel: "SAIR" });
    const t = opcao[name];
    teste(valor, unidadeB, unidadeC, t);
}
function teste(valor, unidadeB, unidadeC, t) {
    switch (t) {
        case "comprimento":
            return funcao.convert(valor, unidadeB, unidadeC);
        case "massa":
            return funcao.massa(valor, unidadeB, unidadeC);
        case "capacity":
            return funcao.capacity(valor, unidadeB, unidadeC);
        default:
            break;
    }
}
console.log(agrupamento());
