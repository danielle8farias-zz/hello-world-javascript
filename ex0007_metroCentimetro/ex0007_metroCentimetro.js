let titulo, m, cm, mm;

titulo = 'Transforma de m para cm e mm'

m = Number(prompt('Digite o valor (metros)'))
cm = m * 100
mm = m * 1000

document.write(`<h1> ${titulo} </h1>`)
document.write(`<p> ${m} metros é igual a ${cm} centímetros e ${mm} milímetros. </p>`)
