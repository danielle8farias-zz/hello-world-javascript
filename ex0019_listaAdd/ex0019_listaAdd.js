let num = document.getElementById('txtn')
let lista = document.getElementById('listaNum')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }
    else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    }
    else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado!`
        lista.appendChild(item)
        // resultado de total vazio após adicionar novo número
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

function finalizar() {
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    }
    else {
        let  total = valores.length
        //res.innerHTML = ''
        res.innerHTML = `<p>Total de elementos: ${total}</p>`

        // inicializando comparação
        let maior = valores[0]
        let menor = valores[0]

        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            // comparando os valores
            if(valores[pos] > maior) {
                maior = valores[pos]
            }
            else if(valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        res.innerHTML += `<p>Soma dos valores: ${soma}</p>`
        res.innerHTML += `<p>Maior valor: ${maior}</p>`
        res.innerHTML += `<p>Menor valor: ${menor}</p>`

        media = soma / total
        res.innerHTML += `<p>Média: ${media}</p>`
    }
}