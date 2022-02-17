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
const Exercise = __importStar(require("./exercises"));
const arrayNumbers = [1, 2, 3, 4];
console.log(Exercise.geeter('Marcos'));
console.log(Exercise.sumArray(arrayNumbers));
console.log("losango 32cm e d = 18cm:", Exercise.losango(32, 18));
console.log("losango que tem D = 200cm e d = 50cm:", Exercise.losango(200, 50));
console.log("trapezio B = 100cm, b = 70cm e altura = 50cm:", Exercise.trapezio(100, 70, 50));
console.log("trapézio que tem B = 75cm, b = 50cm e altura = 35cm:", Exercise.trapezio(75, 50, 35));
console.log("circle 100:", Exercise.circle(100));
console.log("circle 25cm:", Exercise.circle(25));
