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
    highNumber:'demasiado alto',
    lowNumber: 'demasiado bajo', 
}

  
//Crear función
function findNumber(event) {
    if (number.value < 50) {
        text.innerHTML = guessNumber.lowNumber;
    } else if (number.value > 50) {
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

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
  
  // Anda, chacho, píntame en la consola un número random hasta 100;
  const myRandomNumber = getRandomNumber(100);
  
  console.log(`Mi número aleatorio es ${myRandomNumber}`);
