let num, titulo;

titulo = 'O drobro, o triplo e a raíz quadrada de um número'

num = Number(prompt('Digite um número inteiro e positivo:'))

dobro = num * 2
triplo = num * 3
raizQuadrada = Math.sqrt(num)

document.write(`<h1> ${titulo.toUpperCase()} </h1>`)
document.write(`<p> O dobro: ${dobro} </p>`)
document.write(`<p> O triplo: ${triplo} </p>`)
document.write(`<p> A raiz quadrada: ${raizQuadrada} </p>`)
