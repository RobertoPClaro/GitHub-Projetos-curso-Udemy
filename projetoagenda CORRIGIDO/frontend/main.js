import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';
import Contato from './modules/contato';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');

const contatoRegister = new Contato('.form-register');
const contatoEdit = new Contato('.form-edit');

contatoRegister.init();
contatoEdit.init();

login.init();
cadastro.init();

// import './assets/css/style.css';


