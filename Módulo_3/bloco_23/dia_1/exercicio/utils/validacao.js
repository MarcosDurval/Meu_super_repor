module.exports = (req,res,next) =>{
  const {firstName, lastName,email,password} = req.body

  if(!firstName || !lastName) return res.status(422).json({message: "nome ou sobrenome invalido"})
  if(!password || password.length < 0) return res.status(400).json({message:"senha invalida"})
  next()
}