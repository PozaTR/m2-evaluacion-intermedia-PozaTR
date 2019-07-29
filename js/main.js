'use strict'

//Seleccionar los elementos con los que vamos a trabajar
const number = document.querySelector('.number');
const prube = document.querySelector('.button');
const text = document.querySelector('.text');
const count = document.querySelector('.count');
let changeNumber = 0;


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

const myRandomNumber = getRandomNumber(100);


//Crear Objeto
const guessNumber = {
    magicNumber: myRandomNumber, 
    highNumber:'demasiado alto',
    lowNumber: 'demasiado bajo', 
}

//Función reset el número random

  
//Crear función
function findNumber(event) {
    if (number.value < guessNumber.magicNumber) {
        text.innerHTML = guessNumber.lowNumber;
    } else if (number.value > guessNumber.magicNumber) {
        text.innerHTML = guessNumber.highNumber;
    } else {
        text.innerHTML = '¡HAS GANADO, CAMPEONA!'; 
    }
    const value = event.currentTarget.value;
    count.innerHTML = value;
    changeNumber = changeNumber + 1;
    count.innerHTML = changeNumber;
}


//Poner el botón a escuchar el evento
prube.addEventListener('click', findNumber);
