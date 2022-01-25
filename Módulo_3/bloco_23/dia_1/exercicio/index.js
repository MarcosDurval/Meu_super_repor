const express = require('express')
const bodyParse = require('body-parser');
const validacao = require('./utils/validacao');
const modelUser = require('./models/modelUser');
const rescue = require('express-rescue');
const app = express()
const PORT = process.env.PORT || 3001;

app.use(bodyParse.json())
app.get("/user",async (_req,res) =>{
  try {
    const allUser = await modelUser.getAll()
    return res.status(200).json(allUser)
  } catch (err) {
    console.error(err)
    return res.status(500).json({message: `erro na requisição`})
  }
})
app.get("/user/:id",rescue(async(req,res) => {
    const {id} = req.params
    const user = await modelUser.getById(id)
    return res.status(201).json(user)
  })
)

app.post("/user",validacao, async(req,res) => {
  try {
    const {firstName,lastName,email,password} = req.body
    const user = await modelUser.createUser(firstName,lastName,email,password);
    return res.status(200).json(user)
  } catch (error) {
    console.error(error)
    return res.status(500).json({message: `erro na requisição`})
  }
})
app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`)
})