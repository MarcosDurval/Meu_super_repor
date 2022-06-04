const server = require('./index')
const connect = require('./models/connection')
const PORT = process.env.PORT || 3000;

connect()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Ouvindo a porta ${PORT}`);
    })}
  ).cath(
    process.exit(1)
  )