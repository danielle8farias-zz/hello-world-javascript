/**
* autora: Danielle Farias
* repositório: https://github.com/danielle8farias
* Descrição: Lê o nome de uma usuária e retorna o nome com uma mensagem de boas-vindas.
*/


//criando variável
//pegando elemento pelo id do html
let nome = document.getElementById('nome')

//atribuindo variável para a resposta
let res = document.getElementById('res')

//função é chamada ao clicar no botão
function enviar() {
    //escreve no html a string abaixo e o valor da variável nome
    res.innerHTML = `Bem-vinda, ${nome.value}!`
}
