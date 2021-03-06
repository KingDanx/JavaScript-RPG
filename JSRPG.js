//Dan Prudhomme
"use strict";
// As a developer, I want to make at least five commits with descriptive messages.
// As a user, I want an engaging story to be told using alerts.



// As a user, I want Hercules (and each enemy), to have health, attack power, and an array of attack names saved in an object literal.
let player = {
    name: "Hercules",
    health: 100,
    energy: 0, //max 100
    attack: {
        basic: [["Bladestorm", 50, 50], ["Overpower", 10, 100], ["Falcon Punch", 100, 10]], //[name, damage, energy generation]
        ultimate: ["Execute", 150, 0] //[name, damage, energy set point after use]
    }
}

let enemy = [
    {
        name: "Nemean Lion",
        health: 200,
        energy: 0,
        attack: {
            basic: ["Scratch", "Bite"],
            ultimate: "Hyper Fang"
        }
    },
    {
        name: "Lernaean Hydra",
        health: 300,
        energy: 0,
        attack: {
            basic: ["Tackle", "Stomp"],
            ultimate: "Exponential Bite"
        }
    },
];

function playerAttackFunction(attackCommand){
    for(let i = 0; i < player.attack.basic.length; i++){
        if(player.attack.basic[i][0] === attackCommand){
            player.energy += player.attack.basic[i][2];
            alert(`${player.name} used ${player.attack.basic[i][0]} dealing ${player.attack.basic[i][1]} damage and generating ${player.attack.basic[i][2]} energy!`);
        }
}

// As a user, I want the ability to select Hercules’ attack using a menu prompt.
let playersAttack = prompt("What attack do you want to use?");
function choosePlayerAttack(){
   
}
// As a user, I want the foe’s attack to be chosen at random.
// As a user, I want the results of each attack to be logged in the console.
// As a developer, I want to use an Attack() function that will terminate when Hercules or an enemy’s health reaches zero.
// As a developer, I want my RunGame() function to call my other functions in a logical order that will determine game flow.
// As a developer, I want all of my functions to have a Single Responsibility. Remember, each function should do just one thing!