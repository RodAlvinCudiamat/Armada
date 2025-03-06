function generateCharacter(name) {
    const randomNames = ["Zhou Yi-Fan", "Chu Qing-Cheng", "Ye Lin", "Gu Santong", "Lou Yun-Hai"];
    const classes = ["Warrior", "Mage", "Archer", "Healer", "Assassin"];
    const abilities = ["Fireball", "Healing Touch", "Stealth", "Lightning Strike", "Power Slash"];

    let character = {
        name: name || randomNames[Math.floor(Math.random() * randomNames.length)],
        class: classes[Math.floor(Math.random() * classes.length)],
        health: 0,  // Placeholder, will be set using `randomizeHealth()`
        specialAbility: abilities[Math.floor(Math.random() * abilities.length)],

        // Method to randomize health
        randomizeHealth: function() {
            this.health = Math.floor(Math.random() * (150 - 50 + 1)) + 50;
        },

        // Battle method
        battle: function(otherCharacter) {
            let damage = Math.floor(Math.random() * (20 - 5 + 1)) + 5; // Random damage between 5-20
            let oldHealth = otherCharacter.health;
            otherCharacter.health = Math.max(0, otherCharacter.health - damage); // Ensure health doesn't go below 0

            console.log(
                `Character ${this.name} attacked Character ${otherCharacter.name} with ${this.specialAbility}. ` +
                `${otherCharacter.name}'s health dropped from ${oldHealth} to ${otherCharacter.health}.`
            );
        }
    };

    // Set initial health
    character.randomizeHealth();

    return character;
}

// Function to generate multiple characters
function generateMultipleCharacters(x) {
    let characters = [];
    for (let i = 0; i < x; i++) {
        characters.push(generateCharacter()); // Generate and add a new character to the array
    }
    return characters;
}

// Example usage:
const character1 = generateCharacter("Sakamoto");
const character2 = generateCharacter("Kei Uzuki");

console.dir(character1);
console.dir(character2);

character1.battle(character2); // Simulate battle

const party = generateMultipleCharacters(5);
console.dir(party);  // Logs an array of 5 different characters
