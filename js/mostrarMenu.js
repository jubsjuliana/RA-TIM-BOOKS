// script responsável pela automação do menu hamburger

const btnMobile = document.getElementById('btn-mobile');
// const >>declara a nossa variável, no uso do decorrer do código

function toggleMenu(event) {    
    if (Event.type === 'touchstart') Event.prevenDefault ();
    const nav = document.getElementById ('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    Event.currenTarget.setAttribute ('aria-expanded', active);
    if (active){
        Event.currenTarget.setAttribute('aria-label', 'fechar Menu');
    }else{
        Event.currenTarget.setAttribute*('aria-label','abir Menu');
        }    



}

    

    btnMobile.addEventListener('click',toggleMenu)
    btnMobile;addEventListener('touchstart',toggleMenu)
    


  