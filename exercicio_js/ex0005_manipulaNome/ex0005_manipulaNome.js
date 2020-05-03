//função é chamada ao clicar o botão
function enviar() {
    //criando variável
    //pegando elemento pelo id do html
    let nome = document.getElementById('nome')

    //criando variável para receber resposta
    let res = document.getElementById('res')

    //é necessário pegar o 'valor' do objeto string
    //convertendo para maiúsculo
    let maius = nome.value.toUpperCase()

    //escrevendo a resposta no html
    res.innerHTML = `<p>Seu nome em maiúsculo: ${maius}</p>`

    //convertendo para minúsculo
    let minus = nome.value.toLowerCase()
    res.innerHTML += `<p>Seu nome em minúsculo: ${minus}</p>`

    //atribuindo a variável o número de caracteres da string
    //tem que colocar essa krlh do value
    //replace(1º,2º) substitui o primeiro pelo segundo
    /** regex:
        / / para retirar espaços em branco
        \s qualquer espaço em branco incluindo espaço, tabs e novas linhas
        g no javascript para percorrer toda a string e encontrar todas as combinações
    */
    let tamanho = nome.value.replace(/\s/g,'').length
    res.innerHTML += `<p>Seu nome tem ${tamanho} letras.</p>`
}
