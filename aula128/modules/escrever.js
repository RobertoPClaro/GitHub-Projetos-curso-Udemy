const fs = require('fs').promises;
//Essa função recebe 2 parametro o caminho e o dado a ser gravado
module.exports = (caminho, dados) => {
    //aqui o fs.write recebe o caminho e o dado a segraado
    fs.writeFile(caminho, dados, {flag: 'w'});
}