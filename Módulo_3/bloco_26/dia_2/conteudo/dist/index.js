"use strict";
console.log("hello word");
var semana;
(function (semana) {
    semana[semana["segunda"] = 1] = "segunda";
    semana[semana["ter\u00E7a"] = 1] = "ter\u00E7a";
    semana[semana["quarta"] = 3] = "quarta";
    semana[semana["quinta"] = 4] = "quinta";
    semana[semana["sexta"] = 5] = "sexta";
    semana[semana["sabado"] = 6] = "sabado";
    semana[semana["domingo"] = 7] = "domingo";
})(semana || (semana = {}));
console.log(semana[1]);
console.log(semana["terça"]);
