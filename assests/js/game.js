//player details
var playerName=window.prompt("What is your robot name?");
var playerHealth=100;
var playerAttack=10;
var playerMoney=10;
//computer details
var enemyName="Roborto";
var enemyHealth=50;
var enemyAttack=12;

var fight=function(){
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    //option to fight or not 
    if(promptFight.toLowerCase() === "fight"){
        enemyHealth=enemyHealth-playerAttack;
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        
        //to check if enemy is dead or not
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } 
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    
        playerHealth=playerHealth-enemyAttack;
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    
        //to check if player is dead or not
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } 
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
    else if(promptFight.toLowerCase() === "skip"){
        var confirmSkip=window.confirm("Are you sure you'd like to quit?");
        if(confirmSkip){
            window.alert(playerName + " has chosen to skip the fight!");
            playerMoney=playerMoney-2;
        }
        else{
            fight();
        }
    }
    else{
        window.alert("You need to choose a valid option. Try again!");
    }
}
fight();