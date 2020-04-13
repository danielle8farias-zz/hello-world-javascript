function calcular() {
    var txt_velocidade = document.getElementById('txtvel')
    var resultado = document.querySelector('div#resposta')

    var vel = Number(txt_velocidade.value)
    
    resultado.innerHTML = `<p>Sua velocidade é <strong>${vel} Km/h</strong></p>`

    if(vel > 60) {
        resultado.innerHTML += `<p>Você está <strong>multado</strong> por excesso de velocidade!</p>`
    }

    resultado.innerHTML += `<p> Dirija sempre com segurança! </p>`
}
