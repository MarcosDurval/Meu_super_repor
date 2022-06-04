const mongoose = require('mongoose');

const { Schema } = mongoose;

const { MONGO_DB_URL } = process.env;

const info = new Schema({
  key: String,
  name: String,
  location: String,
});

const connection = async () => {
  mongoose.connect(MONGO_DB_URL, { useNewUrlParser: true });
};

const ModelInfos = mongoose.model('info', info);

module.exports = {
  connection,
  ModelInfos,
};
