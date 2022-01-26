const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const databaseConfig = require('./configurations/database');

dotenv.config();
const app = express();

const PORT = process.env.PORT || 4000;
databaseConfig(); //conexão db

app.use(express.json({extended: false}));
app.get('/', (req, res) => {
  res.send('<h1>Server is runing</h1>');
})

app.listen(PORT, () => {
  console.log('Server running on port '+PORT);
});

