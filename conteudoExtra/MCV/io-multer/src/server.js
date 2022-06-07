require('dotenv').config();
const app = require('./index');
const { connection } = require('./models/connection');

const { PORT } = process.env;
connection().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
}).catch(() => {
  process.exit(1);
});