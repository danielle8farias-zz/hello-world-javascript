function media(){
    var texto1 = document.getElementById('nota1')
    var texto2 = document.getElementById('nota2')
    var resposta = document.getElementById('media')

    var nota1 = Number(texto1.value)
    var nota2 = Number(texto2.value)
    var media = (nota1 + nota2)/2

    if(media < 5){
        resposta.innerHTML = `Média = ${media} Estudante reprovado!`
    }
    else if(media >= 5 && media <= 7) {
            resposta.innerHTML = `Média = ${media} Estudante em recuperação!`
    }
    else {
        resposta.innerHTML = `Média = ${media} Estudante Aprovado!`
    }
}
