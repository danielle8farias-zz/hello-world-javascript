function clicar() {
    let desligado = document.getElementById('lamp-off')
    let ligado = document.getElementById('lamp-on')

    if (desligado.style.display == 'none') {
        desligado.style.display = 'block'
        ligado.style.visibility = 'hidden'
    }
    else {
        desligado.style.display = 'none'
        ligado.style.visibility = 'visible'
    }
}
