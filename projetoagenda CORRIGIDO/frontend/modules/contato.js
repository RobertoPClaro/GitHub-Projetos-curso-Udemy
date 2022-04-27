import validator from 'validator';

export default class Contato {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
            //alert(telefoneInput.value);
        });
    }

    validate(e) {
        const el = e.target;
        const nomeInput = el.querySelector('input[name="nome"]');
        const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');
        const email = document.querySelector('.email');
        //const telefone = document.querySelector('.telefone');
        let error = false;
        
        /* Nome é um campo obrigatório.
        Pelo menos um contato precisa ser enviado: e-mail ou telefone. */
         
        if(nomeInput.value === ''){
           alert('Nome é um campo obrigatório.')
            error = true;
        }

        if(!validator.isEmail(emailInput.value) || telefoneInput.value === '') {
            ('Pelo menos um contato precisa ser enviado: e-mail ou telefone.');
            error = true;
        }
        
        if (!error) el.submit();
    }
    
}