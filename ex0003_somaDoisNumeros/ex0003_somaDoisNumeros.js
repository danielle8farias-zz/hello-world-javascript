function somar(){
    var tn1 = document.getElementById('texto1')
    var tn2 = document.querySelector('input#texto2')
    var resposta = document.getElementById('resposta')

    var num1 = Number(tn1.value)
    var num2 = Number(tn2.value)
    var soma = num1 + num2

    resposta.innerHTML = `<strong> ${soma} </strong>`
}