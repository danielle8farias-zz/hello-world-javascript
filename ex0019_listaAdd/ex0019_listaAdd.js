//pegando elemento pelo id do html
//criando variável
let num = document.getElementById('txtn')
let lista = document.getElementById('listaNum')
let res = document.getElementById('res')
//criando vetor
let valores = []

//função que verifica se o número está no intervalo correto
//Number convertendo para tipo número
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }
    else {
        return false
    }
}

//função que verifica se o valor já está na lista
function inLista(n, l) {
    //indexOf() != -1 significa que o valor buscado não está no vetor
    if(l.indexOf(Number(n)) != -1) {
        return true
    }
    else {
        return false
    }
}

//função é chamada ao clicar no botão
function adicionar() {
    //verificando se é um número válido; isNumero()
    //value captura o valor da variável
    //verificando se o número não está na lista; !inLista(valor, lista)
    //&&; and
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        //push() coloca o valor na lista
        valores.push(Number(num.value))
        //criando tag no doc html
        let item = document.createElement('option')
        //.text escrevendo texto
        item.text = `Valor ${num.value} adicionado!`
        //anexando item a lista
        lista.appendChild(item)
        //limpa todo o resultado, caso o usuário ainda queira adicionar mais números depois de ter finalizado
        res.innerHTML = ''
    }
    else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    // apaga a caixa input após adicionar o valor
    num.value = ''
    // após adicionar valor, coloca o cursor na caixa de input para adicionar outro valor
    num.focus()
}

//função é chamada ao clicar no botão
function finalizar() {
    //verificando se o vetor está vazio
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    }
    else {
        //length; tamanho do vetor
        let  total = valores.length
        //res.innerHTML = ''
        res.innerHTML = `<p>Total de elementos: ${total}</p>`

        // inicializando comparação
        let maior = valores[0]
        let menor = valores[0]
        //inicializando soma e média
        let soma = 0
        let media = 0
        //criando variável pos(posição)
        //para cada posição no vetor faça
        for(let pos in valores) {
            //somando os itens do vetor
            soma += valores[pos]
            // comparando os valores
            if(valores[pos] > maior) {
                maior = valores[pos]
            }
            else if(valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        //innerHTML escreve no doc html
        //+= contatena as strings
        res.innerHTML += `<p>Soma dos valores: ${soma}</p>`
        res.innerHTML += `<p>Maior valor: ${maior}</p>`
        res.innerHTML += `<p>Menor valor: ${menor}</p>`
        //calculando a média
        media = soma / total
        res.innerHTML += `<p>Média: ${media}</p>`
    }
}
