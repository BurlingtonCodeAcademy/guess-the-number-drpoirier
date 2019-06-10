/* This is the main program for Project 1 (First Project in JavaScript!)
   
 Guess the number - 
  this program will display the number a user is thinking of
  
  Code author: Denis Poirier, BCA Sum2019, drpoirier 
    Date Started:     Friday Jun 7 2019
    Date Completed:   in-process
    Last Date Revised:Friday Jun 7 2019    
*/

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

// starts the pgm - 
start();   

// function starting the pgm
async function start() {
  startGameSetup();
  // hard coding to min & max to begin with 
    let min=1;    
    let max=100;  
    range = ((max - min)+1);  

    console.log("Please think of a number between " + min + " and " + max + " (inclusive), in this " + range + " number range.");
    let secretNumber = await ask("What is your secret number?\nThis Javascript (JS) program (pgm) won't peek...\n");
    console.log('You entered: ' + secretNumber);  
  
    let pgmTries = 1;
    let cpuGuessNum = getRandomIntInclusive(min, max);

    console.log('(This JS pgm randomly guesses only once) Is it... ' + cpuGuessNum);   
    let userRespYorN = await ask('? ');
  // in case user used lower case - 
    let userRespYorNUC = userRespYorN.toUpperCase();  
    
  // if correctAnswer();  
    if (userRespYorNUC === 'Y') {
    console.log('You stated that this was the correct number, Yea!');
  } else if (userRespYorNUC == 'N') {
    console.log('You stated it was not correct, or ' + userRespYorNUC + ' , Sorry.');
  } else {
    cheatMsg ();
  }

    console.log('The pgm has tried: ' + pgmTries + ' times.');
    let maxTries = (Math.round((Math.log2((max)+1))));
    console.log('The maximum number of tries this program should theorectially only take is: ' + maxTries);

    //First Loop -
    // If it was a Y, then pgm needs to stop, but if it was a N, then continue - 
    if (userRespYorNUC === 'N') { 
      continueTrying = (true);}    
    let userRespHorL = await ask("Is it higher (H) or lower (L)? ");
    
    // in case the user used lower case - 
    let userRespHorLUC = userRespHorL.toUpperCase();  
    
    // goes to High Loop -  
     if (userRespHorLUC == 'H') {
    (gotoHighLoop = (true)); 
       
       // needs to go to Low loop - 
   } else if (userRespHorLUC == 'L') {
     (gotoLowLoop = (true));

     // else needs to go to end of pgm after - 
   } else {
     CheatMsg();
   }

endGameMsg(); 
  process.exit();
}

// function source = MDN - The maximum (max) is inclusive and the minimum (min) is inclusive -
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
 }

 function startGameSetup() {
  console.log("Let's play a game where you (human user) make up a number and I (computer program) try to guess it.") 
 }

 // This is just a sample function with parms - it does nothing in this program - 
 function divisible(num, den) {
  let divBy = num % den;
    if (divBy == 0) {
     result = 'true'
  } else {
     result = 'false'
  }
    return result;
  }

 function CheatMsg() {
  console.log('Sorry, something did not compute! You entered: ' + userRespYorN + 'or we tried to compute: ' + userReponseYorNUC);
  console.log('Sorry, something did not compute! You entered: ' + userRespHorL + 'or we tried to compute: ' + userReponseHorLUC);
 }

 function endGameMsg() {
  console.log("We're done then. Goodbye.");
 }