const path = require('path');
const express = require('express');
// const cors = require('cors');
const bodyParser = require('body-parser');
const controllers = require('./controllers/ping');
const middlewares = require('./middlewares');

// const { PORT } = process.env;

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

// app.use(
//   cors({
//     origin: `http://localhost:${PORT}`,
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Authorization'],
//   }),
// );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'uploads')));

app.get('/files', middlewares.logs, async (req, res) => {
  console.log(req.log);
  const teste = await controllers.get();
  res.render('infos/index', { teste });
});

app.post('/files/upload', middlewares.configMulter.single('file'), async (req, res) => {
  console.log('socket:', req.rawHeaders);
 try {
    await controllers.create(req.file);
   return res.redirect('/files');
 } catch (error) {
   return res.status(400).json({ message: 'deu ruim' });
 }
});

app.use(middlewares.error);

module.exports = app;
