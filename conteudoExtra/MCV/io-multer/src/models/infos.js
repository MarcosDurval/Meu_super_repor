const { ModelInfos } = require('./connection');

const create = async (body) => {
  ModelInfos.create(body);
};

const get = async () => ModelInfos.find();

module.exports = {
  create,
  get,
};