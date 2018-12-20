const computerChoices = [1,2,3,4,5,6,7,8,9,10];
const game = document.querySelector('main');
let turnsLeft = 10
let wins = 0
let losses = 0

    
document.onkeyup = function(event) {
    const userGuess = parseInt(event.key);
    const computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    const update = function() {
        game.innerHTML = 
        `   <p>Your Guess: ${userGuess}</p>
            <p>The computer chose: ${computerGuess}</p>
            <p>Wins: ${wins}</p>
            <p>Losses: ${losses}</p>
            <p>Turns Left: ${turnsLeft}</p> `
        }   
    // if(computerChoices.includes(userGuess)  {
        if(userGuess===computerGuess) {
                wins++; 
                return update();
                
            } else if(turnsLeft===0) {
                alert('Game Over!  Keep your day job...you are not psychic!');
                losses++;
                return update();      
                
            } else { 
                losses++;
                turnsLeft--;
                return update();
            }   
        } 
    
