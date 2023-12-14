// Script responsável pela automação do hamburger

const btnMobile = document.getElementById('btn-mobile');
// Const >> declara a nossa variável no uso do decorrer do código

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.constains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
     if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
     } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
     }
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)