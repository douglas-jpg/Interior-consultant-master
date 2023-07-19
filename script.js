const btm = document.getElementById('menu');


function menu (event) {
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btm.addEventListener('click', menu);
btm.addEventListener('touchstart', menu);
