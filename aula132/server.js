const express = require('express');
const app = express();

//trata o body das requisições
app.use(express.urlencoded({ extended: true}))
// http://facebook.com/profiles/

app.get('/', (req, res) =>{
    res.send(`
    <form action="/" method="Post">
    Nome do cliente: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `)
});

//get le
app.get('/testes/:idUsuarios?/:parametro?', (req, res)=>{
    //recebe 
    // /profile/3
    console.log(req.params);
    //recebe os dados da aquisição como parametros na url
    // /profile/?chave1=valor1&chave2=valor2...
    console.log(req.query);
    //envia a resposta da requisição
    res.send(req.query)
})

app.post('/', (req, res) =>{
    console.log(req.body);
    res.send(`Oque voce me enviou foi: ${req.body.nome}`)
})
//vincula a porta 3000 e escuta as coneções feitas nessa porta
app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});