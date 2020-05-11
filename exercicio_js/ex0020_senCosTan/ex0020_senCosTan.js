//função é chamada ao clicar no botão
function calcular() {
    //pegando elemento do html pelo id
    //criando variável ângulo
    let angulo = document.getElementById('angulo')
    let res = document.getElementById('res')

    //função que converte graus para radianos
    function radianos(angulo) {
        //value captura o valor da variável
        //Number converte em tipo número
        //Math.PI retorna o valor de PI
        let rad = Number(angulo.value) * (Math.PI/180)
        return rad;
    }

    let radiano = radianos(angulo)
    //calculando seno
    let seno = Math.sin(radiano)
    //calculando cosseno
    let cosseno = Math.cos(radiano)
    //calculando tangente
    let tangente = Math.tan(radiano)

    //escrevendo os resultados no doc html
    res.innerHTML = `<p>Seno: ${seno.toFixed(2)}</p>`
    //+= concatenando strings
    res.innerHTML += `<p>Cosseno: ${cosseno.toFixed(2)}</p>`
    res.innerHTML += `<p>Tangente: ${tangente.toFixed(2)}</p>`
}
