var num1 = 17
var num2 = prompt("Guess a number")
while (num1 != num2) 
{
    if (num2 > num1 + 5) {
        alert("You guessed it too high. Please try again!")
    }

    else if (num2 > num1) {
        alert("You guessed it a little high. Please try again!")
    }

    else if (num2 < num1 - 5) {
        alert("You guessed it too low. Please try again!")
    }

    else if (num2 < num1) {
        alert("You guessed it a little low. Please try again!")
    }
    num2 = prompt("Try again hooman!")
}

if (num2 == num1) {
    alert("Yeah hooman! You guessed it correct!\nThanks for playing the game.")
}