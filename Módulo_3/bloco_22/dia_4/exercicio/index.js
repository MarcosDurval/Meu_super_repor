const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())

app.get('/ping',(_,res) => res.status(200).json({xablau: 'pong'}));
app.post('/hello',(req,res) => {
  const { name } = req.body
  if(!name) return res.status(203).json({message: "informe um nome válido"})
  return res.status(200).json({message: `Hello, ${name}!`})
})

app.listen(3000, () => console.log('Ouvindo na porta 3k'));
