//criando variável
//recebendo valor digitado
let dia = document.getElementById('txt-dia')
let mes = document.getElementById('txt-mes')
let ano = document.getElementById('txt-ano')

//atribuindo variável para a resposta
let res = document.getElementById('res')

//função é chamada ao clicar no botão
function enviar() {
    //escreve no html a string abaixo e os valores passados pelas variáveis
    res.innerHTML = `<p>Você nasceu em: ${dia.value} de ${mes.value} de ${ano.value}</p>`
}
