//função é chamada ao clicar no botão
function calcular() {
    //criando variável
    //pegando elemento pelo id do html
    let num = document.getElementById('num')
    let res = document.getElementById('res')

    //value pega o valor da variável
    //Number converte para número
    //atribuindo valor a variável cm
    let cm = Number(num.value) * 100
    let mm = Number(num.value) * 1000

    //escrevendo no documento html
    res.innerHTML = `<p>centímetros: ${cm}</p>`
    //concatenando strings
    res.innerHTML += `<p>milímetros: ${mm}</p>`
}
