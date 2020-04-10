let titulo, anterior, sucessor;

titulo = 'número anterior e sucessor'

num = Number(prompt('Digite um número inteiro:'))

anterior = num - 1

sucessor = num + 1

document.write(`<h1>${titulo.toUpperCase()}</h1>`)
document.write(`<p>O número anterior é ${anterior} e o sucessor ${sucessor}</p>`)
