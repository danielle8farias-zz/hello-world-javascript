var areaClique = document.getElementById('area')
// ver erro!
areaClique.addEventListener('click', clicar)
areaClique.addEventListener('mouseenter', entrar)
areaClique.addEventListener('mouseout', sair)

function clicar(){
    areaClique.innerText = 'Clicou!'
    areaClique.style.background = 'red'
}

function entrar(){
    areaClique.innerText = 'Entrou!'
}

function sair(){
    areaClique.innerText = 'Saiu!'
    areaClique.style.background = '#7736a1'
}
