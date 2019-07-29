'use strict'

//Seleccionar los elementos con los que vamos a trabajar
const number = document.querySelector('.number');
const prube = document.querySelector('.button');
const text = document.querySelector('.text');

//Crear Objeto
const guessNumber = {
    magicNumber: 50, 
    highNumber:'',
    lowNumber: '',
}

//Crear función
function findNumber() {
    console.log('funciono');
    if (number.value < 50) {
        text.innerHTML = 'demasiado bajo';
    } else if (number.value > 50) {
        text.innerHTML = 'demasiado alto';
    } else {
        text.innerHTML = '¡HAS GANADO, CAMPEONA!'; 
    }
}




//Poner el botón a escuchar el evento
prube.addEventListener('click', findNumber);