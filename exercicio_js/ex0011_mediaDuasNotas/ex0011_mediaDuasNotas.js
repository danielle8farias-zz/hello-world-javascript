/**
* autora: Danielle Farias
* repositório: https://github.com/danielle8farias
* Descrição: Usuário informa dois valores para as notas e programa calcula e retorna a média.
* Se a média for menor do que 5, retorna que o aluno foi reprovado.
* Se a média for entre 5 e 7, retorna que está de recuperação.
* Se maior do que 7, está aprovado.
*/


//função é chamada ao clicar no botão
function media(){
    //criando variável
    //pegando elemento pelo id do html
    let nota1 = document.getElementById('nota1')
    let nota2 = document.getElementById('nota2')
    let res = document.getElementById('res')

    //value pega o valor da variável
    //Number converte para número
    //atribuindo resultado da operação a variável média
    let media = ( Number(nota1.value) + Number(nota2.value) )/2

    //verificando se a média é menor do que 5
    if(media < 5){
        //escrevendo no doc html
        res.innerHTML = `<p>Média = ${media} Estudante reprovado!</p>`
    }
    //(senão, se) verificando se a média está entre 5 e 7 
    else if(media >= 5 && media <= 7) {
            res.innerHTML = `<p>Média = ${media} Estudante em recuperação!</p>`
    }
    //entra nesse bloco de comando, caso nenhuma das expressõe acima seja verdadeira
    else {
        res.innerHTML = `<p>Média = ${media} Estudante Aprovado!</p>`
    }
}
