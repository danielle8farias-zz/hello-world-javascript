/**
* autora: Danielle Farias
* repositório: https://github.com/danielle8farias
* Descrição: Usuária informa um número e programa retorna o anterior e sucessor desse.
*/


//função é chamada ao clicar no botão
function enviar() {
    //criando variável
    //pegando elemento pelo id do html
    let num = document.getElementById('num')

    //atribuindo variável para a resposta
    let res = document.getElementById('res')

    //convertendo valor para número
    //subtraindo 1 para calcular o valor anterior
    let ant = Number(num.value) - 1
    //somando 1 para calcular o valor posterior
    let suc = Number(num.value) + 1

    //escrevendo no html as respostas
    res.innerHTML = `<p>Antecessor: ${ant}</p>`
    //+= contatenando strings
    res.innerHTML += `<p>Sucessor: ${suc}</p>`
}
