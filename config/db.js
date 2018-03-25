// Database Connection Data

const { dbCredentials } = require('./local');
// dbCredentials = {username: 'youUsername', password: 'yourPassword'}

module.exports = {
  ...dbCredentials,
  database: 'mydb',
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  operatorsAliases: false,
  
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};