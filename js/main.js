'use strict'

const number = document.querySelector('.number');
const form = document.querySelector('.js__form');
const text = document.querySelector('.text');
const count = document.querySelector('.count');
const reset = document.querySelector('.reset');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function resetNumbers() {
    number.value = config.default.number;
    count.innerHTML = config.default.count;
    text.innerHTML = config.default.text;
    config.state.magicNumber = getRandomNumber(100);
}

function findNumber(event) {
    event.preventDefault();
    
    if (number.value === '') {
        text.innerHTML = config.messages.emptyValue;
    }else {
        const numberValue = parseInt(number.value);
        
        if(numberValue < 0) {
            text.innerHTML = config.messages.minNumber;
        }else if (numberValue > 100) {
            text.innerHTML = config.messages.maxNumber;
        }else if (numberValue < config.state.magicNumber) {
            text.innerHTML = config.messages.lowNumber;
        } else if (numberValue > config.state.magicNumber) {
            text.innerHTML = config.messages.highNumber;
        } else {
            text.innerHTML = config.messages.magicNumber; 
        }
        config.state.count += 1;
        count.innerHTML = config.state.count;
    }
}

const config = {
    default: {
        number: 0, 
        count: 0,
        text: 'Escribe un número y dale a prueba',
    },
    messages: {
        magicNumber: '¡HAS GANADO, CAMPEONA!', 
        highNumber:'demasiado alto',
        lowNumber: 'demasiado bajo', 
        minNumber: 'no puedes escribir un número menor que 0',
        maxNumber: 'no puedes escribir un número mayor que 100',
        emptyValue: 'debes meter un número para empezar a jugar'
    },
    state: {
        count: 0, 
        magicNumber: getRandomNumber(100)
    }
}

resetNumbers()

form.addEventListener('submit', findNumber);

reset.addEventListener('click', resetNumbers);

