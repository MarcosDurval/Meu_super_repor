const connection = require('./connection');

const serialize = (authorsData)=>({
  id: authorsData.id,
  firstName: authorsData.first_name,
  middleName: authorsData.middle_name,
  lastName: authorsData.last_name 
})
const getAll = async () => {
  const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM model_example.authors;',);
  console.log('teste:',authors)
  return authors;
};

module.exports = {
  getAll,
}