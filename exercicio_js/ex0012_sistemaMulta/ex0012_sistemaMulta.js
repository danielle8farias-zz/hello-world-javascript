/**
* autora: Danielle Farias
* repositório: https://github.com/danielle8farias
* Descrição: Usuária digita um valor de velocidade de um carro. Se a velocidade for maior do que 60 Km/h o programa informa que ele foi multado.
*/


//função é chamada ao clicar no botão
function calcular() {
    //criando variável
    //pegando elemento pelo id do html
    let velocidade = document.getElementById('txtvel')
    //pegando elemento através do seletor
    let res = document.querySelector('div#res')

    //value pega o valor da variável
    //escrevendo no doc html
    res.innerHTML = `<p>Sua velocidade é <strong>${velocidade.value} Km/h</strong></p>`

    //verificando se a velocidade é maior do que 60
    if(velocidade.value > 60) {
        //concatenando strings
        res.innerHTML += `<p>Você está <strong>multado</strong> por excesso de velocidade!</p>`
    }

    res.innerHTML += `<p> Dirija sempre com segurança! </p>`
}
