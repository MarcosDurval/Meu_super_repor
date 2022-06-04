const Author = require('../models/Author');
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination:(res,file,call) => {
    call(null,path.resolve(__dirname,'..','uploads'))
  },
  filename:(req,file,call) =>{
    call(null,`${Date.now}-${file.originalname}`)
  }
})

const config = multer({storage})


const listAuthors = async (_req, res) => {
  const authors = await Author.getAll();
  const testes = []
  return res.status(200).render('authors/index', { testes });
};

const showAuthor = async(req,res) => {
  const { id } = req.params;
  const author = await Author.findById(id);

  if (!author) return res.status(404).render('404');

  return res.status(200).render('authors/show', { author });
}

const newAuthor = async(req,res) => {
  res.render('authors/new', { message: null });
}

const cadastraUrl = async(req,res) => {
  
}

// const createAuthor = async (req, res) => {
//   const { first_name, middle_name, last_name } = req.body;

//   if (!Author.isValid(first_name, middle_name, last_name)) {
//     return res.render('authors/new', { message: 'Dados inválidos' });
//   }

//   await Author.create(first_name, middle_name, last_name);
//   const authors = await Author.getAll();

//   return res.status(200).render('authors/index', { authors });
// };

module.exports = {
  listAuthors,
  showAuthor,
  newAuthor,
  createAuthor
}