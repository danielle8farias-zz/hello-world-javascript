//criando variável
//recebendo valor digitado
let num1 = document.getElementById('texto1')
let num2 = document.querySelector('input#texto2')

//atribuindo variável para a resposta
let resposta = document.getElementById('resposta')

//função é chamada ao clicar no botão
function somar(){
    //criando variável soma
    //convertendo os valores em números e somando
    let soma = Number(num1.value) + Number(num2.value)
    //escrevendo no html a resposta da soma
    resposta.innerHTML = `<strong><p>Soma: ${soma} </p></strong>`
}
