/**
* autora: Danielle Farias
* repositório: https://github.com/danielle8farias
* Descrição: Imprime mensagem na tela ao clicar no botão.
*/


//função é chamada ao clicar no botão
function enviar() {
    let res = document.getElementById('res')

    res.innerHTML = `<p>Adeus, mundo!</p>
    <p>Toda criança começa como um cientista nato. 
    Nós é que tiramos isso delas. 
    Só umas poucas passam pelo sistema com sua admiração e entusiasmo pela ciência intactos.</p>`
}
