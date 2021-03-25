/**
* autora: Danielle Farias
* repositório: https://github.com/danielle8farias
* Descrição: Lâmpada acende se estiver apagada ou apaga, se estiver acessa.
*/


function clicar() {
    let desligado = document.getElementById('lamp-off')
    let ligado = document.getElementById('lamp-on')
    let btn = document.querySelector('input')

    if (desligado.style.display == 'none') {
        desligado.style.display = 'block'
        ligado.style.visibility = 'hidden'
        btn.value = 'ON'
    }
    else {
        desligado.style.display = 'none'
        ligado.style.visibility = 'visible'
        btn.value = 'OFF'
    }
}
