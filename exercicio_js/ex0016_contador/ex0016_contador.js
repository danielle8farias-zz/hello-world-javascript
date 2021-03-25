/**
* autora: Danielle Farias
* repositório: https://github.com/danielle8farias
* Descrição: Usuário informa para um contador um número inicial, final e o passo.
* Programa retorna a contagem em ordem crescente ou decrescente, a depender dos valores finais e iniciais. 
*/


//função é chamada ao clicar no botão
function contar() {
    //pegando elemento pelo id do html
    //criando variável
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    //verificando se o tamanho dos valores de início, fim ou passo são iguais a zero
    //length retorna o tamanho
    //value pega o valor da variável
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //escreve no documento html substituindo o que houver no doc original
        res.innerHTML = 'Não foi possível contar. Faltam dados'
    }
    else {
        //<br> quebra de linha
        res.innerHTML = 'Contando: <br>'
        //verificando se o valor de passo é menor ou igual a zero
        if(passo.value <= 0) {
            //+= contatenando strings
            res.innerHTML += 'Não foi possível contar'
        }
        //verificando se o valor inicial é menor do que o final
        //contagem crescente
        //Number converte em tipo número
        else if(Number(ini.value) < Number(fim.value)) {
            //for(1º, 2º, 3º)
            //1º início; a variável contadora c recebe o valor inicial
            //2º condição de parada; enquanto c for menor ou igual ao valor final
            //3º incrementa o contador; a cada iteração soma c ao valor de passo
            for(let c = Number(ini.value); c <= Number(fim.value); c += Number(passo.value)) {
                //a cada iteração escreve c no doc html
                res.innerHTML += ` ${c} \u{1F637} ` // unicode emoji
            }
            //escreve no doc html emoji final
            res.innerHTML += `\u{1F912}`
        }
        //caso o valor inicial seja maior do que o final
        //contagem regressiva
        else {
            for(let c = Number(ini.value); c >= Number(fim.value); c -= Number(passo.value)) {
                res.innerHTML += ` ${c} \u{1F637} `
            }
            res.innerHTML += `\u{1F912}`
        }
    }
}
