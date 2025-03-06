// Create a character object
let warrior1 = {
    name: "Jin Woo",
    hp: 100,
    strength: 12,
    attack: function () {
        return Math.floor(Math.random() * (this.strength + 1)); 
    }
};

// Create a second character object
let warrior2 = {
    name: "Antares",
    hp: 100,
    strength: 15,
    attack: function () {
        return Math.floor(Math.random() * (this.strength + 1)); 
    }
};

// Create a loop for 10 rounds
for (let round = 1; round <= 10; round++) {
    console.log(`\nRound ${round}:`);

    // Warrior 1 attacks Warrior 2
    let damage1 = warrior1.attack();
    warrior2.hp -= damage1;
    if (warrior2.hp < 0) warrior2.hp = 0; // Prevent negative HP
    console.log(`${warrior1.name} attacks ${warrior2.name} and does ${damage1} damage!`);
    console.log(`${warrior1.name} HP: ${warrior1.hp} | ${warrior2.name} HP: ${warrior2.hp}`);


    // Stop if warrior2 is defeated
    if (warrior2.hp === 0) {
        console.log(`${warrior2.name} has been defeated!`);
        break;
    }

    // Warrior 2 attacks Warrior 1
    let damage2 = warrior2.attack();
    warrior1.hp -= damage2;
    if (warrior1.hp < 0) warrior1.hp = 0; // Prevent negative HP
    console.log(`${warrior2.name} attacks ${warrior1.name} and does ${damage2} damage!`);
    console.log(`${warrior1.name} HP: ${warrior1.hp} | ${warrior2.name} HP: ${warrior2.hp}`);

    // Stop if warrior1 is defeated
    if (warrior1.hp === 0) {
        console.log(`${warrior1.name} has been defeated!`);
        break;
    }
}

console.log("\nBattle Over!");

if (warrior1.hp > warrior2.hp) {
    console.log(`${warrior1.name} wins with ${warrior1.hp} HP remaining! `);
} else if (warrior2.hp > warrior1.hp) {
    console.log(`${warrior2.name} wins with ${warrior2.hp} HP remaining! `);
} else {
    console.log("It's a draw! Both warriors have the same HP.");
}