//função é chamada ao carregar a página
function pegaHora() {
    //criando variável
    //pegando elemento pelo id do html
    let mensagem = document.getElementById('msg')
    let img = document.getElementById('imagem')
    //new Date() cria um objeto com a data e hora atuais
    //getHours() função que retorna apenas a hora
    let hora = new Date().getHours()

    //escrevendo no doc html
    mensagem.innerHTML = `<p>São ${hora} hora(s).</p>`

    //verificando se a hora é menor do que 12
    if(hora < 12) {
        mensagem.innerHTML += `<p>Bom dia!</p>`
        //substitui o arquivo da tag img
        img.src = 'manha.png'
        //mudando cor de fundo
        document.body.style.background = '#fc8b25'
    }
    //verificando se a hora é menor ou igual a 18
    else if (hora <= 18) {
        mensagem.innerHTML += `<p>Boa tarde!</p>`
        img.src = 'tarde.png'
        document.body.style.background = '#b0e3d9'
    }
    //caso seja a hora seja maior do que 18
    else {
        mensagem.innerHTML += `<p>Boa noite!</p>`
        img.src = 'noite.png'
        document.body.style.background = '#003744'
    }
}
