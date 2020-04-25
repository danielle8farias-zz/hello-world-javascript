/** criando variável */
/** recebendo valor digitado */
let nome = document.getElementById('nome')

//atribuindo variável para a resposta
let res = document.getElementById('res')

//função é chamada ao clicar no botão
function enviar() {
    //escreve no html a string abaixo e o valor da variável nome
    res.innerHTML = `Bem-vinda, ${nome.value}!`
}
