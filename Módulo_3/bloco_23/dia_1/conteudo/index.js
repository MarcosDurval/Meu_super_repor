const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const Author = require('./models/Author');



app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  console.log("authors:",authors)
  res.status(200).json(authors);
});

app.listen(PORT, () => {
  console.log(`ouvindo na porta ${PORT}`);
})