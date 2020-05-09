//função é chamada ao clicar no botão
function verificar() {
    //getFullYear() retorna o ano
    //new Date() cria um objeto com a data e hora atuais
    //criando variável
    let anoAtual = new Date().getFullYear()
    //pegando elemento pelo id do html
    let ano = document.getElementById('txtano')
    //pegando elemento através do seletor
    let res = document.querySelector('div#res')

    //verificando se o tamanho do ano informado é igual a zero
    //ou se o valor do ano informado é maior do que o ano atual
    if (ano.value.length == 0 || Number(ano.value) > anoAtual) {
        alert('Verifique os dados e tente novamente')
    }
    else {
        //pegando elemento pelo nome
        let sex = document.getElementsByName('radsex')
        //calculando a idade
        let idade = anoAtual - Number(ano.value)
        //genero inicializa vazio
        let genero = ''
        //criando elemento de tag no html
        let img = document.createElement('img')
        //adicionando atribuição a tag criada
        //id='foto'
        img.setAttribute('id','foto')

        //verificando se o primeiro checkbox foi marcado
        if(sex[0].checked) {
            //variável recebe gênero homem
            genero = "Homem"
            //verificando se a idade está entre 0 e 9 anos
            if(idade >= 0 && idade < 10) {
                //adicionando atribuição a tag criada
                //src='nome_da_img.png'
                img.setAttribute('src','foto-bebe-m.png')
            }
            //verificando se a idade é menor do que 21
            else if(idade < 21) {
                img.setAttribute('src','foto-jovem-m.png')
            }
            //verificando se idade é menor do que 50
            else if(idade < 50) {
                img.setAttribute('src','foto-adulto-m.png')
            }
            //caso idade seja maior do que 50
            else {
                img.setAttribute('src','foto-idoso-m.png')
            }
        }
        //verificando se o segundo checkbox foi marcado
        else if(sex[1].checked) {
            genero = "Mulher"
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src','foto-bebe-f.png')
            }
            else if(idade < 21) {
                img.setAttribute('src','foto-jovem-f.png')
            }
            else if(idade < 50) {
                img.setAttribute('src','foto-adulto-f.png')
            }
            else {
                img.setAttribute('src','foto-idoso-f.png')
            }
        }
        //escreve no documento html substituindo o que houver no doc original
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        //adiciona a tag img ao local da id='res'
        res.appendChild(img)
    }
}
