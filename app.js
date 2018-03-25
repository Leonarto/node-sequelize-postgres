const express = require('express');
const Sequelize = require('sequelize');
const db = require('./config/db');
const sequelize = new Sequelize(db.database, db.username, db.password, db);

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const User = require('./model/User')(sequelize,Sequelize);
const Test = require('./model/Test')(sequelize,Sequelize);

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h3>Usuarios</h3>
    <a href="/user">localhost:3000/user</a>
    <h3>Test</h3>
    <a href="/test">localhost:3000/test</a>
  `);
});

app.get('/user', (req, res) => {
  User.findAll()
      .then(users => {
        return res.json(users);
      });
});

app.get('/test', (req, res) => {
  Test.findAll()
      .then(tests => {
        return res.json(tests);
      });
});

app.listen(3000, () => {
  console.log('Listening to port 3000');
});