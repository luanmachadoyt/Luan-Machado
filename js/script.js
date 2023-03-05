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

