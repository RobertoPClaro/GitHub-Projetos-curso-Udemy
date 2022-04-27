// para frente ./pasta/pasta/arquivo
//para traz ../ quantas vezes for preciso voltar
/* const Cachorro = require('./z/mod2');
const c1 = new Cachorro('Dog')
c1.latir();
 */
const path = require('path')

console.log(path.resolve(__dirname, '..','..'));

