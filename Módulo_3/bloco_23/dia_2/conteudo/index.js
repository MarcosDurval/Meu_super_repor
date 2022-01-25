const express = require('express');
const bodyParser = require('body-parser');
const Author = require('./services/Author');
const app = express()
app.use(bodyParser.json());

app.get('/authors',async(_req,res) => {
  const authors = await Author.getAll();
  return res.status(200).json(authors)
})

app.get('/authors/:id',async (req,res) => {
  const {id} = req.params;
  const author = await Author.findById(id);
  if(!author) return res.status(404).json({message:'Not found'})
  return res.status(200).json(author)
});

app.post('/authors',async(req,res) => {
  const {first_name,middle_name,last_name} = req.body;
  if(Author.isValid(first_name,middle_name,last_name)) {
    return res.status(400).json({message: "Dados inválidos"})
  }
  await Author.createAuthor(first_name,middle_name,last_name)
  return res.status(201).json({message: 'Pessoa autora cirada com sucesso! '})
})
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`ouvindo a porta "${PORT}"`)
})