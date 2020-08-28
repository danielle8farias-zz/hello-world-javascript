//função é chamada ao clicar no botão
function calcular() {
    //pegando elemento pelo id do html
    //criando variáveis
    let valor1 = document.getElementById('txt-valor-1').value
    let valor2 = document.getElementById('txt-valor-2').value
    let valor3 = document.getElementById('txt-valor-3').value

    let res = document.getElementById('res')

    //pegando elemento pelo id do html
    //criando variável
    if (valor1 == '' || valor2 == '' || valor3 == '') {
        //innerHTML escreve no doc html
        res.innerHTML = `Preencha todos os valores`
    }
    else {
        //Number convertendo para tipo número
        //value captura o valor da variável
        let calculo = Number(valor1) * Number(valor2) * Number(valor3)
        res.innerHTML = `<p>Multiplicação dos valores: ${calculo}</p>`
    }
}
