import { isCorrect } from './functions.js';

const myButton = document.getElementById('action-button');

myButton.onclick = () => {
    console.log('it happened');
    alert('welcome to my quiz!');
    const myConfirmation = confirm('do you wanna take my quiz?');
    console.log(myConfirmation);
    const userAnswer = prompt('is my favorite color bluish');
    const sanitizedUserAnswer = userAnswer.toLocaleLowerCase().trim();
    console.log(sanitizedUserAnswer);


    if(sanitizedUserAnswer === 'yes') {
        alert ('right-o!');
    }
    else {
        alert('naah');
    }
};