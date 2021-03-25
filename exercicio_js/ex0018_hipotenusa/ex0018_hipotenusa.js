/**
* autora: Danielle Farias
* repositório: https://github.com/danielle8farias
* Descrição: Usuário informa dos valores de catetos e programa retorna o valor da hipotenusa.
*/


//função é chamada ao clicar no botão
function calcular() {
    //pegando elemento pelo id do html
    //criando variável
    let cateto1 = document.getElementById('txt-cateto-1')
    let cateto2 = document.getElementById('txt-cateto-2')
    let res = document.getElementById('res')

    //sqrt(raiz quadrada)
    //pow(base, expoente)
    //Number convertendo para tipo número
    //value captura o valor da variável
    let hipotenusa = Math.sqrt( Math.pow(Number(cateto1.value), 2) + Math.pow(Number(cateto2.value), 2) )

    //innerHTML escreve no doc html
    //toFixed() fixa o número de casas decimais
    res.innerHTML = `<p>Hipotenusa: ${hipotenusa.toFixed(2)}</p>`
}
