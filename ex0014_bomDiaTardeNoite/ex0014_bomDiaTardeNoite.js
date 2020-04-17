function pegaHora() {
    let mensagem = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let horaAtual = new Date()
    let hora = horaAtual.getHours()

    mensagem.innerHTML = `<p>São ${hora} hora(s).</p>`

    if(hora < 12) {
        mensagem.innerHTML += `<p>Bom dia!</p>`
        img.src = 'manha.png'
        document.body.style.background = '#fc8b25'
    }
    else if (hora <= 18) {
        mensagem.innerHTML += `<p>Boa tarde!</p>`
        img.src = 'tarde.png'
        document.body.style.background = '#b0e3d9'
    }
    else {
        mensagem.innerHTML += `<p>Boa noite!</p>`
        img.src = 'noite.png'
        document.body.style.background = '#003744'
    }
}
