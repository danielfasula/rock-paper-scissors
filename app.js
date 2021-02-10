let choices = ['rock', 'paper', 'scissors']

function play(playerChoice) {

    let computerChoice = choices[Math.floor(Math.random() * 3)]

    if (playerChoice == 'rock') {
        if (computerChoice == 'rock') {
            document.getElementById('test').textContent = 'You tie! Try Again.';
        } else if (computerChoice == 'paper') {
            document.getElementById('test').textContent = 'You Lose! Try Again.';
        } else if (computerChoice == 'scissors') {
            document.getElementById('test').textContent = 'You Win! Your father will finally be proud.';
        }
    } else if (playerChoice == 'paper') {
        if (computerChoice == 'rock') {
            document.getElementById('test').textContent = 'You Win! Your father will finally be proud.';
        } else if (computerChoice == 'paper') {
            document.getElementById('test').textContent = 'You Tie! Try Again.';
        } else if (computerChoice == 'scissors') {
            document.getElementById('test').textContent = 'You Lose! Try Again.';
        }
    } else if (playerChoice == 'scissors') {
        if (computerChoice == 'rock') {
            document.getElementById('test').textContent = 'You Lose! Try Again.';
        } else if (computerChoice == 'paper') {
            document.getElementById('test').textContent = 'You Win! Your father will finally be proud.';
        } else if (computerChoice == 'scissors') {
            document.getElementById('test').textContent = 'You Lose! Try Again.';
        }
    }
}