var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

var fight = function(enemyName) {
    // repeat and execute as long as the enemy robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm if player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        //Subtract the value of 'playerAttack' from the value of 'enemy health' and use that result to update the value in the 'enemyHealth' variable
        enemyHealth = enemyHealth - playerAttack;
        console.log (playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining. ");

        if (enemyHealth <= 0 ) {
            window.alert(enemyName + " has died!");

            // award player money for winning
            playerMoney = playerMoney +20;
            //leave while() loop since enemy is dead
            break;

        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

            //remove players health
        playerHealth = playerHealth - enemyAttack;
            console.log (enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

            // if player health is less than or equal to 0, notify they have died
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
            } 
        }
};

// function to start a new game
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            // debugger;
            fight(pickedEnemyName);
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    // after loop ends or player is out of health, run endgame
    endGame();
}

// function to end the entire game
var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.")
    }
    
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart game
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}

// start game when page loads
startGame();