//função é chamada ao clicar no botão
function tabuada() {
    //pegando elemento pelo id do html
    //criando variável
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    //value captura o valor da variável
    //length retorna o tamanho
    //verificando se a variável tem tamanho igual a zero
    if(num.value.length == 0) {
        alert('Por favor digite um número.')
    }
    else {
        //escrevendo no doc html no local da id='seltab'
        tab.innerHTML = ''
        //for(1º, 2º, 3º)
        //1º início; a variável contadora c recebe o valor 1
        //2º condição de parada; enquanto c for menor ou igual ao valor 10
        //3º incrementa o contador c
        for(let c = 1; c < 10; c++) {
            //criando tag no doc html
            let item = document.createElement('option')
            //.text escrevendo texto a cada iteração
            //Number convertendo para tipo número
            item.text = `${Number(num.value)} x ${c} = ${Number(num.value) * c}`
            //anexando o item a cada iteração
            tab.appendChild(item)
        }
    }
}
