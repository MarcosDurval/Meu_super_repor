"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Repare que aqui importamos também a função 'model' do Mongoose:
const mongoose_1 = require("mongoose");
try {
    (0, mongoose_1.connect)('mongodb://127.0.0.1:27017/model_example').then(() => console.log('conc'));
    console.log('aqui');
}
catch (error) {
    console.error(error);
}
// Aqui está o nosso schema construído logo acima:
const bookSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true }
});
// Para acessarmos os métodos disponibilizados pelo Mongoose e
// implementarmos nossa API, criamos um Model do product:
const bookModel = (0, mongoose_1.model)('books', bookSchema);
