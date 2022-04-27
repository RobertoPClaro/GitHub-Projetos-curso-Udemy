//const nome = 'Luiz';
//const sobrenome = 'Miranda'
//const falaNome = () =>nome + ' ' + sobrenome;
/* module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome; */
//exports.nome = nome;
//exports.sobrenome = sobrenome;
//exports.falaNome = falaNome;
//this.qualquerCoisa = 'O que eu quiser exportar'

class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
}

/* module.exports.nome = 'Luiz';
exports.Pessoa = Pessoa;
this.sobrenome = 'Qualquer coisa que eu quiser' */

/* Sintaxe
Há dois tipos de exportação:

Exportações Explícitas (Named Exports) (Zero ou mais exports por módulo)
Exportações Padrão (Default Exports) (Uma por módulo)
// Exportando recursos individuais
export let name1, name2, …, nameN; // também var, const
export let name1 = …, name2 = …, …, nameN; // também var, const
export function functionName(){...}
export class ClassName {...}

// Lista de exportações
export { name1, name2, …, nameN };

// Renomeando exports
export { variable1 as name1, variable2 as name2, …, nameN };

// Exportando atribuições desestruturadas renomeando
export const { name1, name2: bar } = o;

// Exportações Padrão (Default exports)
export default expression;
export default function (…) { … } // também class, function*
export default function name1(…) { … } // também class, function*
export { name1 as default, … };

// Agregando módulos
export * from …; // não define a exportação padrão
export * as name1 from …; // Draft ECMAScript® 2O21
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
export { default } from …;
nameN */