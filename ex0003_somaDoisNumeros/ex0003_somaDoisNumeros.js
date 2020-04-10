document.write('<h1>')
document.write('Soma dois números')
document.write('</h1>')

document.write('<p>')
document.write('Resultado')
document.write('</p>')

let num1, num2, soma;

// fazendo a conversão, pois prompt recebe string
num1 = Number.parseFloat(prompt('Digite o 1º número:'))
// pode-se utilizar somente o Number
num2 = Number(prompt('Digite o 2º número:'))
soma = num1 + num2;

alert('Realizando a soma...')
document.write(`${num1} + ${num2} = ${soma}`)
