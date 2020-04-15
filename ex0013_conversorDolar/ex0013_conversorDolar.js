function calcular() {
    let txt_real = document.getElementById('valor-real')
    let resultado = document.querySelector('div#resposta')

    let valorReal = Number(txt_real.value)
    let valorDolar = valorReal / 5.25

    resultado.innerHTML = `U$ ${valorDolar.toFixed(2)}`
}
