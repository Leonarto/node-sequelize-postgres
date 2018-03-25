const excelToArr = require('../excelToObjArr');
const path = require('path');

module.exports = (sequelize, Sequelize) => {
  const Test = sequelize.define('test', {
    nombre: {
      type: Sequelize.STRING
    },
    aletoriedad: {
      type: Sequelize.STRING
    }
  });
  
  // Bootstraping test data from excel
  Test.sync({force: true}).then(() => {
    return Test.bulkCreate(excelToArr(path.resolve(__dirname, '../files/test.xlsx')));
  }).then((res) => {
  });
  
  return Test;
};