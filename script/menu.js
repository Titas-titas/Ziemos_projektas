const openMenu = document.querySelector('#menu');
const menu = document.querySelector('#sidebar');
const closeMenu = document.querySelector('#closeMenu');

openMenu.addEventListener('click', () => {
    menu.classList.add("sidebar__active");
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove("sidebar__active");
});