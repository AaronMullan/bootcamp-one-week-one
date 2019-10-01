import { isCorrect } from './functions.js';

const myButton = document.getElementById('action-button');

myButton.onclick = () => {
    console.log('button was pressed');
    alert('welcome to my quiz!');
    const myConfirmation = confirm('Would you like to take my quiz?');
    console.log(myConfirmation);
    const userAnswer = prompt('Do my Addidas roam all over coloseum floors?');
    const sanitizedUserAnswer = userAnswer.toLocaleLowerCase().trim();
    console.log(sanitizedUserAnswer);


    if(sanitizedUserAnswer === 'yes') {
        alert ('You are correct, they do.');
    }
    else {
        alert('Well, actually my Addidas DO roam all over coloseum floors');
    }
};