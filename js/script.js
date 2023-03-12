document.addEventListener('DOMContentLoaded', () => {

    new TypeIt('#descricao', {
        speed: 200,
        loop: false,
    })
        .type('Desenvolvedor Front-end!', { delay: 900}) .delete(24)
        .type('Developer Front-end!', { delay: 900})
    .go()

   
});



const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav'); 
    nav.classList.toggle('active');
}


btnMobile.addEventListener('click', toggleMenu);



//-------------------------------CSS---------------------------------------------------//

var icones = document.querySelector(".css3")

icones.addEventListener("mouseover", function() {

    var legenda = document.querySelector("#text-css")

    var texto_padrao = document.querySelector("#text-padrao")

    legenda.classList.remove("hide")
    texto_padrao.classList.add("hide")

})

icones.addEventListener("mouseout", function() {

    var legenda = document.querySelector("#text-css")
    var texto_padrao = document.querySelector("#text-padrao")

    legenda.classList.add("hide")
    texto_padrao.classList.remove("hide")

})

//--------------------------------HTML-----------------------------------------------------//

var icones = document.querySelector(".html5")

icones.addEventListener("mouseover", function() {

    var legenda = document.querySelector("#text-html")

    var texto_padrao = document.querySelector("#text-padrao")

    legenda.classList.remove("hide")
    texto_padrao.classList.add("hide")

})

icones.addEventListener("mouseout", function() {

    var legenda = document.querySelector("#text-html")
    var texto_padrao = document.querySelector("#text-padrao")

    legenda.classList.add("hide")
    texto_padrao.classList.remove("hide")

})

//--------------------------------JS-----------------------------------------------------//

var icones = document.querySelector(".js")

icones.addEventListener("mouseover", function() {

    var legenda = document.querySelector("#text-js")

    var texto_padrao = document.querySelector("#text-padrao")

    legenda.classList.remove("hide")
    texto_padrao.classList.add("hide")

})

icones.addEventListener("mouseout", function() {

    var legenda = document.querySelector("#text-js")
    var texto_padrao = document.querySelector("#text-padrao")

    legenda.classList.add("hide")
    texto_padrao.classList.remove("hide")

})
//--------------------------------FIGMA-----------------------------------------------------//

var icones = document.querySelector(".figma")

icones.addEventListener("mouseover", function() {

    var legenda = document.querySelector("#text-figma")

    var texto_padrao = document.querySelector("#text-padrao")

    legenda.classList.remove("hide")
    texto_padrao.classList.add("hide")

})

icones.addEventListener("mouseout", function() {

    var legenda = document.querySelector("#text-figma")
    var texto_padrao = document.querySelector("#text-padrao")

    legenda.classList.add("hide")
    texto_padrao.classList.remove("hide")

})