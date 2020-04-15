function pegaHora() {
    let horaAtual = new Date()
    let hora = horaAtual.getHours()
    let resultado = document.getElementById('resposta')

    resultado.innerHTML = `<p>São ${hora} hora(s).</p>`

    if(hora < 12) {
        resultado.innerHTML += `<p>Bom dia!</p>`
    }
    else if (hora <= 18) {
        resultado.innerHTML += `<p>Boa tarde!</p>`
    }
    else {
        resultado.innerHTML += `<p>Boa noite!</p>`
    }
}
