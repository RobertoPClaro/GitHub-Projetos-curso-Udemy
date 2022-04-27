require('dotenv').config();//referente as variaveis de ambiente de desenvolvimento que estão no .env
const express = require('express');
const app = express();//aqui inicia o app do express
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING,{useNewUrlParser: true, UseUnifiedTopology: true})
.then(() => {
  app.emit('pronto')
})
.catch(e => console.log(e));//mongoose que modela o esquema que vai ser salvo na base de dados.
const session = require('express-session');//para identificar o navegador do cliente salva um cooki
const MongoStore = require('connect-mongo');//para dizer que as seções vão ser salvas no banco de dados
const flash = require('connect-flash');//são msg rapidas que são auto apagadas
const routes = require('./routes');//São as rotas da nossa aplicação
const path = require('path');//Para trabalhar com caminhos
//const { clear } = require('console');//não sei oque esta fazendo aqui pode apagar
const helmet = require('helmet');//recomendação do express
const csurf = require('csurf');//CSRFToken 
const {middlewareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middlewares/middleware');//são funções executadas na rota
app.use(helmet());
app.use(express.urlencoded({ extended: true }));//pode postar formularios pra dentro da nossa aplicação
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')))//arquivos estaticos exemplo img css javaScript


const sessionOptions = session({
  secret: 'uhauhauhauhauhauha',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));//as paginas html
app.set('view engine', 'ejs');//engine utilizada para renderizar os html

app.use(csurf());
//nosso proprios Middleware
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});
