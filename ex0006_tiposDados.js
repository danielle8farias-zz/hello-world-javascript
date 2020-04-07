"use strict"; /** indica que o navegador deve usar o motor novo do JS */

let mensagem;
mensagem = 3;
alert(mensagem);
mensagem = 'oi';
alert(mensagem);

// criando variáveis em um mesma linha
let nome = 'Danielle',
    idade = 38,
    peso = 60.5;

document.write('Nome: ',nome, '<br>','Idade: ',idade,'<br>','Peso(kg): ',peso,'<br>');
document.write(typeof nome);

// declarando constante
const ANIVERSARIO = 24;

const VERMELHO = '#f00',
    LARANJA = '#ff7f00';

let cor = LARANJA;
mensagem = `A cor é: ${cor}`;
alert(mensagem);
cor = VERMELHO;
mensagem = `Agora a cor é: ${cor}`;
alert(mensagem);
