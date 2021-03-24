/**
* autora: Danielle Farias
* repositório: https://github.com/danielle8farias
* Descrição: Usuária digita, em números, a data completa de nascimento e programa retorna essa informação formatada.
*/


//função é chamada ao clicar no botão
function enviar() {
    //criando variável
    //pegando elemento pelo id do html
    let dia = document.getElementById('txt-dia')
    let mes = document.getElementById('txt-mes')
    let ano = document.getElementById('txt-ano')

    //atribuindo variável para a resposta
    let res = document.getElementById('res')

    //escreve no html a string abaixo e os valores passados pelas variáveis
    res.innerHTML = `<p>Você nasceu em: ${dia.value} de ${mes.value} de ${ano.value}</p>`
}
