//criando variável
//recebendo valor digitado
let num = document.getElementById('num')

//atribuindo variável para a resposta
let res = document.getElementById('res')

function enviar() {
    //convertendo valor para número
    //subtraindo 1 para calcular o valor anterior
    let ant = Number(num.value) - 1
    //somando 1 para calcular o valor posterior
    let suc = Number(num.value) + 1

    //escrevendo no html as respostas
    res.innerHTML = `<p>Antecessor: ${ant}</p>`
    res.innerHTML += `<p>Sucessor: ${suc}</p>`
}
