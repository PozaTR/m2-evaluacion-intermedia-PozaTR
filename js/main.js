'use strict'

const number = document.querySelector('.number');
const test = document.querySelector('.button');
const text = document.querySelector('.text');
const count = document.querySelector('.count');
let changeNumber = 0;

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

const myRandomNumber = getRandomNumber(100);

const guessNumber = {
    magicNumber: myRandomNumber, 
    highNumber:'demasiado alto',
    lowNumber: 'demasiado bajo', 
}

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

test.addEventListener('click', findNumber);
