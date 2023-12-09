// Script responsável pela automoção do menu hamburger

const btnMobile = document.getElementById('btn-mobile');
// const >> declara a nossa variável, no uso decorrer do códico 

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDeFault();
    const nav = document.getElementById('nav');
      nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
      } else {
        event.currentTarget.setAttribute('arial-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)