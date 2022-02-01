"use strict"
let buttons = document.getElementsByClassName('f-btn')
let tabs = document.querySelectorAll('.features-content')
let burger = document.getElementById('burger')
let links = document.getElementsByClassName('nav-links')
let nav = document.querySelectorAll('nav')


tabs[0].style.display = 'flex'
buttons[0].classList.add('selected')


function change(target, name) {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
        buttons[i].classList.remove('selected');
    };

    target.currentTarget.classList.add('selected');
    let tab = document.getElementById(name);
    tab.style.display = 'flex';
};

burger.addEventListener('click', function () {
    for (let link of links) {
        link.classList.toggle('block')
    }
    this.classList.toggle('rotateZ')
});


