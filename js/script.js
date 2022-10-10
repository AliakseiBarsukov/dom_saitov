// burger menu

document.querySelector('.menu-icon-wrapper').onclick = function(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
}

const navBtn = document.querySelector('.nav__select-btn');
const navSelectList = document.querySelector('.nav__select_list');
const navBurger = document.querySelector('.nav__burger');
const navList = document.querySelector('.nav__list');
const body = document.body;


navBtn.addEventListener('click', () => {
    navSelectList.classList.toggle('nav__select_list-active');
    navBtn.classList.toggle('nav__select-btn-active');
});

navBurger.addEventListener('click', () => {
    navList.classList.toggle('nav__list-active');
    body.classList.toggle('overflow-hidden');
});