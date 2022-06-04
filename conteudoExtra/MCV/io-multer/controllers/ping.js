const model = require('../models/infos');

const create = async (file) => {
  const { key, originalname: name, location } = file;
  await model.create({ location, name, key });
};

const get = async () => model.get();

module.exports = {
  create,
  get,
};
