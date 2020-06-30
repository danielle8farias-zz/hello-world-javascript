function mudarFoto(foto) {
    document.getElementById('icone').src =  foto
}

function calcularTotal() {
    let quant = parseInt(document.getElementById('cQtd').value)
    total = quant * 1500
    document.getElementById('cTot').value = total
}
