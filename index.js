/* This is the main program for Project 1 (First Project in JavaScript!)
   
Guess the number - 
  this program will display the number a user is thinking of
  
  Code author: Denis Poirier, BCA Sum2019, drpoirier 
    Date Started:     Friday Jun 7 2019
    Date Completed:   in-process
    Last Date Revised:Friday Jun 7 2019       */

// the below constants were there already:     
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

// the below function was already there; there are more functions at the bottom
function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start(); // calls the start function to start program (already there)

/* Game Overview / PsuedoCode / flow:

  This JavaScript program via
   Computer (cpu) tries to guess the number you have picked.
     User starts game
       Cpu tells user how game will work
          
   Ask user to pick a number between 1 and 100
      tell user to keep track of that number
   cpu sets variables (guessNumber) to zero (initializes)?
      numTries (it took) to guess; starts off on try 1 - 
        adding 1 to try (O +1 )
    cpu sets a range?  1-100   lower # and upper #
     cpu takes the range - defines lower and upper #'s of range
       take 1/2 of the range to start as a cpuGuess of the number
    cpu guesses  50 (half of the
      range; splitting the range into 2)
       cpu asks user if it's Higher or Lower or correct
         and how the user should respond (H) or (L) or (Y)
       cpu reads the responses and takes actions based on the 
         response - 
         ***Loop***
          if Y (Yes), then cpu got it correct; it goes to end of program* 
            if H (higher), then computer eliminates 1-50 (the lower range), and 
               concentrates on the upper 1/2 of the range (51 -100 range);
            if L (lower), then cpu eliminates the upper range and keeps 
              lower range (1 - 49);
            REPEAT process, splitting what is remaining in 1/2 and guessing 
              the middle number and then asking the question is it guess correct
                or not.
               When it guesses correctly, then the cpu says 
                  if it runs out of answers, the last number it guesses 
                    has to be the answer and it says so to user 
           End of Program - cpu has guessed the correct number
             verified with user input; 
             Output Message - Your number was #...###
             Output messave - It took your CPU - tries & #
               should be between 1 & 7 tries to do this...

  Definitions:

  secretNumber = the number that is to be kept secret from part of pgm figuring it out.
    // this gets passed from the "outside" if a human is using the program
  min = the lower number (integer) limit of the guessing range, start with 1
  max = the upper/higher number (int) limit of the range, start with 100
  cpuGuessNum = the number that the cpu is guessing
  userResponseYorN = user answer Y or N to if cpu guess of the number is correct
  userResponseHorL = user answer to if their number is Higher or Lower
  maxTries = Math.round((Math.log2((HighRangeLimit)+1)))

    Loops: loop thru tries until cpu gets it correctly

      set initial boundries (H) & (L)

      at first, guess a random# within the range as the first try at program
       after that is working, 
         comment out this section or just don't use this function again, but 
           concentrate on the real goal of the problem.

      eliminate parts of range, 
        reduce range
          by guessing 1/2 of the range
            eliminate the 1/2 of the range you do not need
              redefine newrange 
                repeat 

Method - 

  First, to get program started, get the computer to generate a 
    random number as a first guess ; get the code to work with this first.

    Then, make program function 

    Then, as a final code improvement, try a more efficient way...

      Think - "Make it work, make it right, make it fast"
 
Usage / Use Cases - 

  variables - 

    gameIntroString = 'Please think of a number between 
      lowRangeLimit (1) and upperRangeLimit (100) (Inclusive).\n
      I (this program running in javascript on computer/cpu) will try to guess it.'

    cpuGuessNumString = 'Is it... ' + cpuGuessNum + '?';
      
    cpuHintString = 'Is it higher (H), or lower (L)?

Hints - 

      Use psuedocode or flowcharts

      eliminate ranges of possible solutions

      the guess is a pivot or fulcrum 
        read the section about this from Khan academy

      Keep track of numbers they guessed, and/or 
        as well as the current high and low values

      off by 1 values - keep code and what you want to do clear - 
        i.e. > and/or/vs >= 

      sign reversal may get you - be clear about guess higher than actual number 
        and/or your number is higher than my guess

Backlog - ? Not sure if this is extra or ???

  optimal soln will have tries <= [log2(n)+1]
    if n = 100, then the max # of tries would be no more than 7
      try a binary search instead of random search

  Accept a parm specifying the max guess 
    i.e. node guess.js 500  ; where 500 is the max # for the guess
      then use this as max, for example, max first range = 1 - 500

  Cheat detector - (user) cheating detection - 
    if a response contradicts earlier answer (outside current range), 
      then complain stating prev branch decision, discard answer, 
      ask the question again - i.e. 
        you said it was lower than 25, so it can't also be higher than 24!

  Role Reversal - 2 parts 
    1 write the "reverse" game - put in different source file

    2 combine the 2 pgms into 1, so computer and human takes 
        turns first one , then the other, then repeat
          until?

  Refractor (skip per teacher)
    What code is shared between the two programs?
      Can you unify code by extracting functions?
      Are your function and variable names descriptive?
      Remove any comments - comments should explain why you are doing it,
        not what you are doing - your code should do this

  Test - (skip per teacher) - 
    How could you write unit tests for a game like this? Are there
      parts of the algorithm that you can extract into a function, then write tests 
      for just that function?
          
  Test first! - (skip per teacher, at least for now on all these for now) - 
    Also - Now that you've done this once, throw it away! 
      Start over from scratch, but this time, use "test-driven development":
        Write a test, 
          watch it fail, 
            make it pass, 
              repeat.

    ... end of comment section          */
    
async function start() {     // this is the first function -- starting the prgm
  console.log("Let's play a gave where you (human) make up a number and I (computer) try to guess it.") 

  let min=1;    // hard coding minimum (min) to begin with
  let max=100;  // hard coding maximum (max) to begin with
  
  console.log("Please think of a number between " + min + "and " + max + "100 (inclusive).")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);  // variable secretNumber from user input
   
// Put body of Program within this section - call functions at bottom

  let cpuGuessNum = getRandomIntInclusive(min, max);
  console.log('This JavaScript program guesses: ' + cpuGuessNum + ' ');   
  
  let correctAnswer = await ask("Was this correct? (Y or N): ");
  if (correctAnswer == 'Y')        console.log('You stated that this was the correct number, Yea!')
    else if (correctAnswer == 'N') console.log('You stated it was not correct, Sorry.')
      else                         console.log('Sorry, something did not compute!')

// ******1*********2*********3*********4*********5*********6*********7*********8

// the following was there already - to end the program
  console.log("We're done then. Goodbye.");  // end of program
  process.exit();
}

// functions used in this program are below

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
 } // source = MDN - The maximum (max) is inclusive and the minimum (min) is inclusive 
                                                                                 
// *****END****