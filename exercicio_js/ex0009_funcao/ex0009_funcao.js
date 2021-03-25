/**
* autora: Danielle Farias
* repositório: https://github.com/danielle8farias
* Descrição: Interação do DOM com o mouse e botão.
*/


//função chamada ao clicar no quadrado
function clicar(){
    //pegando elemento pelo id do html
    //criando variável
    let area_clique = document.getElementById('area')
    //escrevendo texto no html
    area_clique.innerText = 'Clicou!'
    //mudando cor de fundo
    area_clique.style.background = 'red'
}

//chama a função através do evento onmouseenter no DOM
function entrar(){
    let area_clique = document.getElementById('area')
    area_clique.innerText = 'Entrou!'
}

//chama a função através do evento onmouseout no DOM
function sair(){
    let area_clique = document.getElementById('area')
    area_clique.innerText = 'Saiu!'
    area_clique.style.background = '#7736a1'
}
