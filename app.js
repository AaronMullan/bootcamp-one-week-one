import { isCorrect } from './functions.js';

const myButton = document.getElementById('action-button');

myButton.onclick = () => {
    console.log('button was pressed');
    alert('welcome to my quiz!');
    const myConfirmation = confirm('Would you like to take my quiz?');
    console.log(myConfirmation);
    
    const userAnswer = prompt('Do my Addidas roam all over coliseum floors?');
    const sanitizedUserAnswer = userAnswer.toLocaleLowerCase().trim();
    const userIsCorrect = isCorrect(sanitizedUserAnswer);
    if(userIsCorrect) {
        alert ('You are correct, they do.');
    }
    else {
        alert('Well, actually my Addidas DO roam all over coliseum floors');
    }
    
    const userAnswer2 = prompt('Do my Addidas and I slay all suckers who perpetrate?');
    const sanitizedUserAnswer2 = userAnswer2.toLocaleLowerCase().trim();
    console.log(sanitizedUserAnswer2);
    const userIsCorrect2 = isCorrect(sanitizedUserAnswer2);
    if(userIsCorrect2) {
        alert ('You are correct, we do slay all suckers who perpetrate.');
    }
    else {
        alert('Well, actually my Addidas and I DO slay all suckers who perpetrate');
    }

    const userAnswer3 = prompt('Would I trade my Addidas for beat up Bally\'s?');
    const sanitizedUserAnswer3 = userAnswer3.toLocaleLowerCase().trim();
    console.log(sanitizedUserAnswer3);
    const userIsCorrect3 = isCorrect(sanitizedUserAnswer3);
    if(userIsCorrect3) {
        alert('Well, actually I would NOT I trade my Addidas for beat up Bally\'s.');
    }
    else {alert ('You are correct, I would not I trade my Addidas for beat up Bally\'s.');
        
    }

};