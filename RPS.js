/*var hand = ['rock', 'paper', 'scissors'];
var player1 = gethand;
var player2 = gethand;
var playRound = (player1, player2);
var pchand = function choice () {
	var choice = parseInt(Math.floor(Math.random()*10 > 3))
	if choice > 3 {
		choice = 'rock';
	}
	else if choice > 6 {
		choice =  'paper';
	}
	else {
		choice = 'scissors'
	}
};

console.log(pchand);
*/



/*var choices = ['Rock', 'Paper', 'Scissors'];
//for(var i = 0; i < 3; i++)
function choice(pcHand) {
		if(parseInt(Math.floor(Math.random() * 10) + 1)>3) {
		console.log('Rock')
	}else if (choice > 6) {
		console.log('Scissors');
	}
	}else console.log('Paper');{ 
	}
console.log(choice());
*/



/* George's Example--
var playerWin = 0;

var computerWin = 0;

​

function playGame(player1, computer2, playUntil){

    

    

    while(playerWin < playUntil && computerWin < playUntil){

        // choice[0] = 'rock', choice[1] = 'paper', choice[2] = 'scissors'

        var choice = ['rock', 'paper', 'scissors']; 

​

        function getChoice() {

​

            let rand = Math.random();

​

            if (rand < 0.34 ){

                return choice[0];

            }else if (rand < 0.67 ){

                return choice[1];

            }else{

                return choice[2];

            }

        }

​

        var computerChoice = getChoice();

        var userChoice = getChoice();

​

        console.log(player1 + ' you have ' + playerWin)

        console.log(computer2 + ' you have ' + computerWin)

​

        function compare() {

            if(computerChoice == userChoice){

                return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is a tie!";

            }

​

            if(computerChoice == 'rock'){

                if(userChoice == 'scissors'){

                    computerWin++;

                    return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is you lose!";

                }else {

                    playerWin++;

                    return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is you win!";

                }

            }

            

            if(computerChoice == 'paper'){

                if(userChoice == 'rock'){

                    computerWin++;

                    return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is you lose!";

                }else {

                    playerWin++;

                    return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is you win!";

                }

            }

​

            if(computerChoice == 'scissors'){

                if(userChoice == 'paper'){

                    computerWin++;

                    return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is you lose!";

                }else {

                    playerWin++;

                    return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is you win!";

                }

            }

            

        }

​

        console.log(compare());

    }

​

    console.log('Great job! the ' + computer2 +  ' had ' + computerWin + '. The ' + player1 + ' had ' + playerWin);

}

​

playGame('George', 'Computer', 5);

​

// console.log('Great job! the ' + computer2 +  ' had ' + computerWin + '. The ' + player1 + ' had ' + playerWin);

*/

var myHand = ['Rock', 'Paper', 'Scissors'];
var pcHand = parseInt(Math.random()*10)%3;
if (parseInt <0.34){
   return pcHand[0];
}else if(parseInt <=0.67){
   return pcHand[2];
}
else{
    return pcHand[1];
}

var judge = function(myHand, pcHand) {
    if(myHand === pcHand) {
    return "Tie";
}
if(myHand === "Rock") {
    if(pcHand === "Scissors") {
        return "Rock wins";
    } else {
        return "Paper wins";
    }
}


if(myHand === "Paper") {
    if(pcHand === "Rock") {
        return "Paper wins";
    } else {
        return "Scissors wins";
    }
}

if(myHand === "Scissors") {
    if(pcHand === "Paper") {
        return "Scissors wins";
    } else {
        return "Rock wins";
    }
}
}
console.log(judge(Rock, Rock));