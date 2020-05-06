//pegando elemento pelo id do html
//criando variável
let areaClique = document.getElementById('area')

//addEventListener() método que captura e manipula um elemento específico
//addEventListener(evento, função)
areaClique.addEventListener('click', clicar)
areaClique.addEventListener('mouseenter', entrar)
areaClique.addEventListener('mouseout', sair)

//função chamada ao clicar no quadrado
function clicar(){
    //escrevendo texto no html
    areaClique.innerText = 'Clicou!'
    //mudando cor de fundo
    areaClique.style.background = 'red'
}

//chama a função através do evento onmouseenter no DOM
function entrar(){
    areaClique.innerText = 'Entrou!'
}

//chama a função através do evento onmouseout no DOM
function sair(){
    areaClique.innerText = 'Saiu!'
    areaClique.style.background = '#7736a1'
}
