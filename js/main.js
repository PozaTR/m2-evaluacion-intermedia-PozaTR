'use strict'

//Seleccionar los elementos con los que vamos a trabajar
const number = document.querySelector('.number');
const prube = document.querySelector('.button');
const text = document.querySelector('.text');
const count = document.querySelector('.count');
let changeNumber = 0;


//Crear Objeto
const guessNumber = {
    magicNumber: 50, 
    highNumber:'',
    lowNumber: '',   
}

//Crear función
function findNumber(event) {
    if (number.value < 50) {
        text.innerHTML = 'demasiado bajo';
    } else if (number.value > 50) {
        text.innerHTML = 'demasiado alto';
    } else {
        text.innerHTML = '¡HAS GANADO, CAMPEONA!'; 
    }
    console.log('todo ok');
    const value = event.currentTarget.value;
    count.innerHTML = value;
    changeNumber = changeNumber + 1;
    count.innerHTML = changeNumber;
}




//Poner el botón a escuchar el evento
prube.addEventListener('click', findNumber);


