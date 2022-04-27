const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'test.json');
const escreve = require ('./modules/escrever');
const ler = require ('./modules/ler');

/* const pessoas = [
    { nome: 'João'},
    { nome: 'Maria'},
    { nome: 'Eduardo'},
    { nome: 'Luiza'}
];
//eesa variavel recebe um json // JSON.stringify pega um objeto e tranforma em um json.
const json = JSON.stringify(pessoas, '', 2);
escreve(caminhoArquivo, json); */

//Essa função recebe o caminho do arquivo como parametro 
async function leArquivo(caminho){
    //essa const le os dados da aquivo passado no caminho
    const dados = await ler(caminho);
    //aqui ela executa a função renderiza dados
    renderizaDados(dados);
}
//Essa função recebe dados como parametro
function renderizaDados(dados){
    //dados recebe um objeto// JSON.parse pega um json e tranforma em objeto.
    dados = JSON.parse(dados);
    //É executado um console.log a cada elemento do array
    dados.forEach(val => console.log(val));
}

leArquivo(caminhoArquivo);