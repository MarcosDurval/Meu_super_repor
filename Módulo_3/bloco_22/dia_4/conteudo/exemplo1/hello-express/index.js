const express = require('express');
const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
]
const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];


app.get('/recipes/:id', (req,res) => {
  const { id }  = req.params
  const recipe = recipes.find( i => `${i.id}` == id) // dica do roz não converta o que vem do navegador para inteiro, pode gerar bugs
  if(!recipe) return res.status(404).json({message: "ID invalido"})
  res.status(200).json({recipe})
})
// app.get('/drinks', (req,res) =>{
//   drinks.sort(({name},p) => name.localeCompare(p.name))
//   res.json({drinks})
// })
app.get('/drinks/xablau',(req,res) => {
  const { nome } = req.query;
  const itens = drinks.filter(({name}) => name.includes(nome))
  if(!itens.length) return res.status(404).json({message: "not found"})
  res.status(200).json({itens})

})
















app.listen(3001,() =>{
  console.log("Aplicação ouvindo na porta 3001")
})
// app.get('/hello',handleHellowWroldRequest);

// app.listen(3001, () => {
//   console.log("Aplicação ouvindo na porta 3001");
// })

// function handleHellowWroldRequest(_req, res) {
//   res.status(200).send("Olá mundo!");
// }

// app.post("/", (req,res) => res.send("Hello Word"))
// app.put("/", (req,res) => res.send("Hello mundo"));
// app.delete("/",(req,res)=> res.send("Olá world"));
