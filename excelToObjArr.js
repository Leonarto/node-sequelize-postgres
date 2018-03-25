const xlsx = require('node-xlsx');

const excelToObjArr = (filePath) => {
  const obj = xlsx.parse(filePath); // parses a file
  const data = obj[0].data;
  
  let dataObjects = [];
  let tableAttrs = data[0];
  
  for(let i=1; i < data.length; i++){
    let newObj = {};
    for(let j=0; j < tableAttrs.length; j++){
      newObj[tableAttrs[j]] = data[i][j];
    }
    dataObjects.push(newObj);
  }
  
  return dataObjects;
};

module.exports = excelToObjArr;