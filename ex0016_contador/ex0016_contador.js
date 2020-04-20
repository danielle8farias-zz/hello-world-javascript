function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    let tamanhoIni = ini.value.length
    let tamanhoFim = fim.value.length
    let tamanhoPasso = passo.value.length

    if (tamanhoIni == 0 || tamanhoFim == 0 || tamanhoPasso == 0) {
        res.innerHTML = 'Não foi possível contar. Faltam dados'
    }
    else {
        res.innerHTML = 'Contando: <br>'

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0) {
            res.innerHTML += 'Não foi possível contar'
        }
        else if(i < f) { //contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F637} ` // unicode emoji
            }
            res.innerHTML += `\u{1F912}`
        }
        else { //contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F637} `
            }
            res.innerHTML += `\u{1F912}`
        }
    }
}