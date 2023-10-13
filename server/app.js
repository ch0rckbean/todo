const express = require('express');
const app = express();
const port = 8000;
const { sequelize } = require('./models');
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const todoRouter = require('./routes/todo');
app.use('/api', todoRouter); // 기본주소: localhost:PORT/api

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
});
