const connection = require('./connection');

const create = async ({ title, directeBy, releaseYear }) => {
  const [result] = await connection
    .execute(
      'INSERT INTO movies (title,directed_by,release_year) VALUES (?,?,?)',
      [title, directeBy, releaseYear],
    );
  return {
    id: result.insertId,
  };
};

module.exports = {
  create,
};
