function calcular() {
    let cateto1 = document.getElementById('txt-cateto-1')
    let cateto2 = document.getElementById('txt-cateto-2')
    let res = document.getElementById('res')

    cateto1 = Number(cateto1.value)
    cateto2 = Number(cateto2.value)

    let hipotenusa = Math.sqrt( Math.pow(cateto1, 2) + Math.pow(cateto2, 2) )

    res.innerHTML = `Hipotenusa: ${hipotenusa.toFixed(2)}`
}
