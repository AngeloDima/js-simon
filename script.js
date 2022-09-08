
// Utility
function getRandomNumber(min, max) {
    const range = max - min + 1
    return Math.floor(Math.random() * range) + min; 
}

function getUniqueRandomNumbers(howMany, min, max){
    const array = [];

    while(array.length < howMany){
        // - generare un numero random 
        const randomNumber = getRandomNumber(min, max);
        // - verificare che non sia già stato estratto
        if( !array.includes(randomNumber) ){
            array.push(randomNumber);
        }

    }
    return array;
}
// -----------------------------------


//30 secondi!
const TIMEOUT_SECONDS = 30;
const NUMBER_TO_GUESS = 5;


// Visualizzare  5 numeri casuali. da 1 a 100 

const numberContainer = document.getElementById('Numero-container');

const numbersToGuess = getUniqueRandomNumbers(NUMBER_TO_GUESS, 1, 100);

numberContainer.innerHTML = numbersToGuess.join(' - ');


// timer di 30 secondi
setTimeout(function(){
    console.log('timeout');
    // nascondo 
    numberContainer.innerHTML = '';

    setTimeout(askAndCheckUserNumbers, 100);


}, TIMEOUT_SECONDS * 1000);







function askAndCheckUserNumbers(){
    // utente inserisce i 5 numeri
    const guessedNumbersByUser = getGuessedNumbersByUser();
    console.log(guessedNumbersByUser);
    let guessedNumbers = 0;
    // controllo numeri inseriti
    for(let i = 0; i < guessedNumbersByUser.length; i++  ){
        const userNumber = guessedNumbersByUser[i];
        if(numbersToGuess.includes(userNumber)){
             // display quali numeri sono stati individuati
            console.log('Hai indovinato il numero', userNumber);
            guessedNumbers++;
        }

    }  

    // display quanti numeri sono stati individuti
    console.log('Hai indovinato', guessedNumbers, 'numeri');

}