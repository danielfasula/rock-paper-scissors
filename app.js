let choices = ['rock', 'paper', 'scissors']

function play(playerChoice) {

    let computerChoice = choices[Math.floor(Math.random() * 3)]

    if (playerChoice == 'rock') {
        if (computerChoice == 'rock') {
            alert('You Tie')
        } else if (computerChoice == 'paper') {
            alert('You Lose!')
        } else if (computerChoice == 'scissors') {
            alert('You Win!')
        }
    } else if (playerChoice == 'paper') {
        if (computerChoice == 'rock') {
            alert('You Win')
        } else if (computerChoice == 'paper') {
            alert('You Tie')
        } else if (computerChoice == 'scissors') {
            alert('You Lose!')
        }
    } else if (playerChoice == 'scissors') {
        if (computerChoice == 'rock') {
            alert('You Lose!')
        } else if (computerChoice == 'paper') {
            alert('You Win!')
        } else if (computerChoice == 'scissors') {
            alert('You Tie')
        }
    }

}