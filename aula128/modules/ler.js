const fs = require('fs').promises;
//le o arquivo
//Essa função recebe um caminho como parametro e utiliza o metodo fs.readFile passando essa caminho como parametro e a condição que é UTF8 
module.exports = (caminho) => fs.readFile(caminho, 'utf8');