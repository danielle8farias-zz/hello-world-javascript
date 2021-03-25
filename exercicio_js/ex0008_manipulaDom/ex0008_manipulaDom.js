/**
* autora: Danielle Farias
* repositório: https://github.com/danielle8farias
* Descrição: Apenas algumas manipulações do DOM.
*/


// mostrando config de caractere
document.write(document.charset + '<br/>')

// mostrando navegador
document.write(navigator.appName + '<br/>')

// mostrando url
document.write(document.URL + '<br/>')

// pegando a tag body
let corpo = document.body
// mudando estilo da tag
corpo.style.background = 'black'

// pegando a primeira tag p
let p1 = document.getElementsByTagName('p')[0]
document.write(p1.innerText + '<br/>')

// pegando a segunda tag p
let p2 = document.getElementsByTagName('p')[1]
// mostrando apenas texto sem formatação
document.write(p2.innerText + '<br/>')
// mostrando texto com formatação
document.write(p2.innerHTML + '<br/>')

// mudando a cor da variável p1
p1.style.color = 'blue';

// pegando elemento por id
var d = document.getElementById('msg')
d.style.background = 'green'
// mudando o conteúdo do id
d.innerText = 'Estou aguardando...'

// pegando por seletor
var c = document.querySelector('div#clique')
c.style.color = 'blue'
