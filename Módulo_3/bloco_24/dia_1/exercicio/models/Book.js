module.exports = (sequelize,Datatypes) => {
  const Book = sequelize.define('Books',{
    title: Datatypes.STRING,
    author: Datatypes.STRING,
    pageQuantity: Datatypes.INTEGER
  })
  return Book
}