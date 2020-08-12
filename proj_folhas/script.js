var indice_slide = 1;
mostrar_slides(indice_slide);


// Função para controlar os botões controladores
function controlador_slides(n) {
    mostrar_slides(indice_slide += n);
}

// Função que controla o slide atual caso clique no ponto indicador
function slide_atual(n) {
    mostrar_slides(indice_slide = n);
}

// Função principal que mostra os slides
function mostrar_slides(n) {
    var i;
    var slides = document.getElementsByClassName("slide-folha");
    var ponto_indicador = document.getElementsByClassName("ponto-pagina");

    if (n > slides.length) {
        indice_slide = 1
    }
    if (n < 1) {
        indice_slide = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < ponto_indicador.length; i++) {
        ponto_indicador[i].className = ponto_indicador[i].className.replace(" ativo", "");
    }

    slides[indice_slide - 1].style.display = "block"; //verificar o problema aqui
    ponto_indicador[indice_slide - 1].className += " ativo";
}
