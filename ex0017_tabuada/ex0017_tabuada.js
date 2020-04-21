function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    let tamanhoNum = num.value.length

    if(tamanhoNum == 0) {
        alert('Por favor digite um número.')
    }
    else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for(let c = 1; c < 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
        }
    }
}