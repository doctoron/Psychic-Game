<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<div id="stats">
      
        <p id="win-count">Wins:</p>
        <p id="loss-count">Losses:</p>
        <p id="guesses-left">Guesses Left:</p>
        
</div>


<script>
numRange=[1,2,3,4,5,6,7,8,9,10];        
let guessesLeft = 3;
let wins = 0;
losses=0;
let guess;
let answer=numRange[Math.floor(Math.random() * numRange.length)]; 

for (i = 0; i < 3; i++) {
    alert(`You have ${guessesLeft} guesses left.  Guess 1-10`);
    guess = prompt("What's your guess?");
    guessesLeft-1;
    break;
}
    if(guess != answer) {
        guessesLeft-1;
        document.append('guesses-left');
        alert("Sorry, that's not correct, try again.");
        prompt(`You have ${guessesLeft} guesses left.  Guess 1-10`);
    }else if(guessesLeft === 0) {
        prompt('You are NOT psychic, keep your day job!');
        losses++;
        document.append('loss-count');
    }else{
        alert("You guessed correctly and must be Psychic!");
        wins++;
        document.append('win-count');
    }

    console.log('User Guess: '+ guess);
    console.log(i + 1);








    </script>
</body>
</html>