const fs = require('fs');
const archivo = '../database/'; 

const guardarDB = ( data, archivo ) => {
    const path = dir + archivo+'.json'
    fs.writeFileSync( archivo, JSON.stringify(data) );
}

const leerDB = () => {
    const path = dir + archivo+'.json'
    if (!fs.existsSync(path) ){
        return null;
    }

    const info = fs.readFileSync(path, { encoding: 'utf-8'});
    const data = JSON.parse (info);
    return data;
  }
  
  module.exports = {
      guardarDB,
      leerDB
  }