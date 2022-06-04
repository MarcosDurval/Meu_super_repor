// const mysql = require('mysql2/promise');

// const connection = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'mvc_example'});

// module.exports = connection;

const mongoose = require('mongoose');

const { Schema } = mongoose

const dataSchema = new Schema({
  url: String,
})

mongoose.Model("Arquivos",dataSchema)


mongoose.connect('mongodb://localhost:27017/test');


export default mongoose