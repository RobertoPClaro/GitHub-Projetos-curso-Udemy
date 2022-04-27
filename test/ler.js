const fs = require('fs').promises;

module.exports = function ler (caminho){
    fs.readFile(caminho, 'utf8');
}