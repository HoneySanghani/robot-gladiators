//player details
var playerName=window.prompt("What is your robot name?");
var playerHealth=100;
var playerAttack=10;
var playerMoney=10;
//computer details
var enemyNames=["Roborto","Amy Android","Robo Trumble"];
var enemyHealth=50;
var enemyAttack=12;

var fight=function(enemyName){
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    //option to fight or not 
    while(playerHealth > 0 && enemyHealth > 0){
        if(promptFight.toLowerCase() === "fight"){
            enemyHealth=enemyHealth-playerAttack;
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
            
            //to check if enemy is dead or not
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                break;
            } 
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
        
            playerHealth=playerHealth-enemyAttack;
            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        
            //to check if player is dead or not
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            } 
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }
        if(promptFight.toLowerCase() === "skip"){
            var confirmSkip=window.confirm("Are you sure you'd like to quit?");
            if(confirmSkip){
                window.alert(playerName + " has chosen to skip the fight!");
                playerMoney=playerMoney-10;
                console.log("playerMoney", playerMoney);
                break;
            }
            else{
                fight();
            }
        }
        else{
            window.alert("You need to choose a valid option. Try again!");
            break;
        }
    }
}
for (var i = 0; i < enemyNames.length; i++) {
    // if player is still alive, keep fighting
    if (playerHealth > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
  
      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];
  
      // reset enemyHealth before starting new fight
      enemyHealth = 50;
  
      // use debugger to pause script from running and check what's going on at that moment in the code
      // debugger;
  
      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);
    }
    // if player isn't alive, stop the game
    else {
      window.alert('You have lost your robot in battle! Game Over!');
      break;
    }
  }