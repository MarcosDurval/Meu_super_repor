"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
var meses;
(function (meses) {
    meses[meses["janeiro"] = 0] = "janeiro";
    meses[meses["fevereiro"] = 1] = "fevereiro";
    meses[meses["mar\u00E7o"] = 2] = "mar\u00E7o";
    meses[meses["abril"] = 3] = "abril";
    meses[meses["maio"] = 4] = "maio";
    meses[meses["junho"] = 5] = "junho";
    meses[meses["julho"] = 6] = "julho";
    meses[meses["agosto"] = 7] = "agosto";
    meses[meses["setembro"] = 8] = "setembro";
    meses[meses["outubro"] = 9] = "outubro";
    meses[meses["novembro"] = 10] = "novembro";
    meses[meses["dezembro"] = 11] = "dezembro";
})(meses || (meses = {}));
var clima;
(function (clima) {
    clima["verao"] = "ver\u00E3o";
    clima["inverno"] = "inverno";
    clima["outono"] = "outono";
    clima["primavera"] = "primavera";
})(clima || (clima = {}));
const ArrayMeses = [];
for (const key in meses) {
    if (typeof meses[key] === "string")
        ArrayMeses.push(meses[key]);
}
const mes = readline_sync_1.default.keyInSelect(ArrayMeses, { cancel: "SAIR" });
function selectMonth() {
    let result = `Estações referentes ao mês de ${ArrayMeses[mes]} `;
    if (mes === -1)
        return result = 'saindo';
    if (mes === 11 || mes <= 2) {
        result += clima.verao;
    }
    else if (mes >= 2 && mes <= 5) {
        result += ` ${clima.outono}`;
    }
    else if (mes >= 5 && mes <= 8) {
        result += ` ${clima.inverno}`;
    }
    else if (mes >= 8 && mes <= 11) {
        result += ` ${clima.primavera}`;
    }
    return result;
}
console.log(selectMonth());
