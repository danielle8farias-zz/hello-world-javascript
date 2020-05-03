//função é chamada ao clicar no botão
function calcular() {

    //criando variável
    //pegando elemento pelo id do html
    let num = document.getElementById('num')
    let res = document.getElementById('res')

    //value pega o valor da variável
    //Number converte para número
    //atribuindo valor a variável dobro
    let dobro = Number(num.value) * 2
    let triplo = Number(num.value) * 3
    //sqrt função que retorna raiz quadrada
    let raizQuadrada = Math.sqrt(Number(num.value))

    res.innerHTML = `<p>Dobro: ${dobro}</p>`
    //concatenando strings
    res.innerHTML += `<p>Triplo: ${triplo}</p>`
    res.innerHTML += `<p>Raiz quadrada: ${raizQuadrada}</p>`
}