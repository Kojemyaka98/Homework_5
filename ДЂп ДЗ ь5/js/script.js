'use strict'

let menu = document.querySelectorAll('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    column = document.querySelectorAll('.column'),
    title = document.getElementById('title'),
    adv = document.querySelector('adv'),
    prompt = document.getElementById('prompt');


title.innerHTML ='Мы продаем только подлинную технику  Apple';
menuItem[1].innerHTML ='Второй пункт';
menuItem[2].innerHTML ='Третий пункт';

document.appendChild(menuItem);


body.style.backgroundImage = "url('/img/apple_true.jpg')";