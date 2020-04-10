let dia = prompt('Digite o dia do seu nascimento:')
let mes = prompt('Digite o número do mês do seu nascimento:')
let ano = prompt('Digite o ano do seu nascimento')

// abre tag h1
document.write('<h1>')
// escreve na tag h1
document.write('Você nasceu em:')
// fecha tag h1
document.write('</h1>')

// abre tag 
document.write('<p>')
// escreve dentro da tag p
document.write(dia + ' de ' + mes + ' de ' + ano)
// fecha tag p
document.write('</p>')
