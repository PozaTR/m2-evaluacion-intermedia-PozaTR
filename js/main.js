'use strict'

//Seleccionar los elementos con los que vamos a trabajar
const number = document.querySelector('.number');
const input = document.querySelector('.button');

//Crear función
function findNumber() {
    console.log('funciono');
}




//Poner el botón a escuchar el evento
input.addEventListener('click', findNumber);