const connection = require('./connection')
const createUser = async (first,last,email,pass) =>{
  const [row] = await connection.execute(`
    INSERT INTO usuario (firstName,lastName,email,password) VALUES (?,?,?,?)
  `,[first,last,email,pass])
  return {
    id : row.insertId,
    firstName: first,
    lastName: last,
    email,
  }
}

const getAll = async() =>{
  const [row] = await connection.execute(
    `SELECT * FROM usuario`
  )
  return row
}
const getById = async(id) => {
  const [row] = await connection.execute(`
    SELECT id,firstName,lastName,email FROM usuario WHERE id = ?
  `,[id])
  delete(row[0].email)
  return row
}

module.exports= {
  createUser,
  getAll,
  getById
}