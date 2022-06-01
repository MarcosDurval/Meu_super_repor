require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

const isValid = (file) => {
  console.log(file.mimetype.endsWith('png'));
  if (file.mimetype.endsWith('png')) {
    return false;
  }
  return true;
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    if (isValid(file)) return callback(null, path.resolve(__dirname, 'uploads/'));
  },
  filename: (req, file, callback) => { 
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '/', 'uploads')));

const upload = multer({ storage });

app.get('/ping', controllers.ping);

app.post('/files/upload', upload.single('file'), (req, res) => {
 try {
   return res.status(200).json({ body: req.body, file: req.file });
 } catch (error) {
   return res.status(400).json({ message: 'deu ruim' });
 }
});

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
