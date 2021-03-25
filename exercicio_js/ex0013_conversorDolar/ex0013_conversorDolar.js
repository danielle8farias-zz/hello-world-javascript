/**
* autora: Danielle Farias
* repositório: https://github.com/danielle8farias
* Descrição: Usuário insere valor em Reais e programa retorna a conversão em dólar.
*/


//função é chamada ao clicar no botão
function calcular() {
    //criando variável
    //pegando elemento pelo id do html
    let real = document.getElementById('valor-real')
    let res = document.querySelector('div#res')

    //value pega o valor da variável
    //Number converte para número
    //atribuindo resultado da operação a variável dolar
    let dolar = Number(real.value) / 5.25

    //toFixed() para fixar o número de casas decimais
    //escrevendo no doc html
    res.innerHTML = `<p>U$ ${dolar.toFixed(2)}</p>`
}
