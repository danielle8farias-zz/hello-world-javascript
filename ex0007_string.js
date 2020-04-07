"use strict"; /** indica que o navegador deve usar o motor novo do JS */

let nome = 'Danielle Farias';
let mensagem;

//pegando o terceiro caractere
mensagem = nome.charAt(2);
console.log(mensagem);

// tabela unicode
mensagem = nome.charCodeAt(0);
console.log(mensagem);

// concatenando string ao final
mensagem = nome.concat('!!!');
console.log(mensagem);

// posição do caractere; faz distinção entre maiúsculo e minúsculo
mensagem = nome.indexOf('F');
console.log(mensagem);

// troca uma string por outra
mensagem = nome.replace('Farias','8farias');
console.log(mensagem);

// corta string no caractere informado
mensagem = nome.split('a');
console.log(mensagem);

// retorna o índice d última ocorrência do caractere
mensagem = nome.lastIndexOf('a');
console.log(mensagem);

// retorna uma lista com a string descrita, posição e a string completa
mensagem = nome.match('Farias');
console.log(mensagem);

// extrai a parte de string do ponto inicial até o final -1
mensagem = nome.substring(0,10);
console.log(mensagem);

mensagem = nome.substring(8); // inicia em 8 até o fim
console.log(mensagem);
