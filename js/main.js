'use strict'

const number = document.querySelector('.number');
const test = document.querySelector('.button');
const text = document.querySelector('.text');
const count = document.querySelector('.count');
const reset = document.querySelector('.reset');
let changeNumber = 0;

//number = parseInt(number);

const defaultElements = {
    defaultNumber: 0, 
    defaultCount: 0,
    defaultText: 'Escribe un número y dale a prueba',
}

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

const myRandomNumber = getRandomNumber(100);

const guessNumber = {
    magicNumber: '¡HAS GANADO, CAMPEONA!', 
    highNumber:'demasiado alto',
    lowNumber: 'demasiado bajo', 
    minNumber: 'no puedes escribir un número menor que 0',
    maxNumber: 'no puedes escribir un número mayor que 100',
}

function findNumber(event) {
    if(number.value < 0) {
        text.innerHTML = guessNumber.minNumber;
    }else if (number.value > 100) {
        text.innerHTML = guessNumber.maxNumber;
    }else if (number.value < myRandomNumber) {
        text.innerHTML = guessNumber.lowNumber;
    } else if (number.value > myRandomNumber) {
        text.innerHTML = guessNumber.highNumber;
    } else {
        text.innerHTML = guessNumber.magicNumber; 
    }
    changeNumber = changeNumber + 1;
    count.innerHTML = changeNumber;
}

test.addEventListener('click', findNumber);

function resetNumbers() {
    number.value = defaultElements.defaultNumber;
    count.innerHTML = defaultElements.defaultCount;
    text.innerHTML = defaultElements.defaultText;
}

reset.addEventListener('click', resetNumbers);

