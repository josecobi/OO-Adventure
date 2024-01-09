// Create `Character class` with a static property MAX_HEALTH
class Character {
    static MAX_HEALTH = 100;

    constructor (name) {
      this.name = name;
      this.health = Character.MAX_HEALTH;
      this.inventory = [];
    }

    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        return result;

    }
  }

// Create `Adventurer` class with static property of ROLES
class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"];

    constructor(name, health, inventory, role, strength, companion) {
        super(name, health, inventory);
        // Add property role to the adventurer
        this.role = role;
        // Check if the roll provided is in the array of ROLES. If not, throw an error. List the errors using the `join` method for arrays.
        if (!Adventurer.ROLES.includes(role)) {
            throw new Error(`Invalid role: ${role}. Must be one of ${Adventurer.ROLES.join(", ")}.`);
        }

        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
        // What other properties should they have?
        strength = Number(strength);
        if(strength > 1 && strength < 50){
        this.strength = strength;
        }
        this.companion = companion;
    }   
     // Adventurers have the ability to scout ahead of them.
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
    // What else should an adventurer be able to do?
    jump() {
        console.log("jump");
    }
    duel(opponent) {
        let roundCounter = 0;
        // Roll and substract 1 to the adventurer's health if rolled a number lower than the opponent. 
        //Keep rolling till one of the two adventurers reaches 50 health stop the duel 
        while(true){
            if(this.health <= 50 || opponent.health <= 50){
                if(this.health > opponent.health){
                    console.log(`${this.name} won the duel!\n`)
                }
                else{
                    console.log(`${opponent.name} won the duel!\n`)
                }
            break;
            }
            else{
                roundCounter += 1;
                console.log(`\nRound ${roundCounter}:\n`)
                let adventurerRoll = super.roll();
                let opponentRoll = opponent.roll();
                if(adventurerRoll > opponentRoll){
                    opponent.health -= 1;
                }
                else if(adventurerRoll < opponentRoll){
                    this.health -= 1;
                }      
                console.log(`${this.name}'s health: ${this.health}.\n${opponent.name}'s health: ${opponent.health}\n`);
            }
        }
    }
}
//Create `companion` class
class Companion extends Character {
    constructor(name, inventory, type, companion = null){
        super(name, inventory)
        this.type = type;
        this.companion = companion;
    }
    heal(){
        console.log("Heal");
    }
    follow(){
        console.log("Follow");
    }

}

// Create instance of Companion, this companion doesn't have any companion so we don't pass it into the arguments
const frank = new Companion("Frank", ["small hat", "sunglasses"], "flea");
console.log(frank);
// Create an instance of Companion with `frank` as its companion
const leo = new Companion("Leo", ["Healing kit", "boots", "sword", "hat"], "cat", frank);
console.log(leo);
// Create a instance of Adventurer with `leo` as a companion. Health is passed as undefined argument because its set to 100 by default in the Character constructor
const robin = new Adventurer("Robin", undefined, ["sword", "potion", "artifact"],"Fighter", 80, leo);

//Create companion for new adventurer
const feather = new Companion("Feather", ["Healing kit", "boots", "claws", "sunglasses"], "eagle");
// Create new adventurer to test the duel method in the Adventurer class
const charles = new Adventurer("Charles", undefined, ["cane", "pouch", "dagger"], "Wizard", 75, feather);

robin.duel(charles);

// Create classes for each role of adventurer and add unique methods to each one
// Fighter 
class Fighter extends Adventurer {
    constructor(name, strength, companion) {
        super(name, undefined, ["sword", "armor"], "Fighter", strength, companion);
    }
    attack(target) {
        console.log(`${this.name} attacks ${target.name} with their sword!`);
        target.health -= this.strength;
        console.log(`${target.name}'s health is now ${target.health}.`);
    }
}

// Healer
class Healer extends Adventurer {
    constructor(name, strength, companion, healingPower) {
        super(name, undefined, ["healing herbs", "robe"], "Healer", strength, companion);
        this.healingPower = Number(healingPower);
    }

    heal(target) {
        console.log(`${this.name} heals ${target.name} with their healing herbs!`);
        target.health += this.healingPower;
        console.log(`${target.name}'s health is now ${target.health}.`);
    }
}

// Wizard
class Wizard extends Adventurer {
    constructor(name, strength, companion, spell) {
        super(name, undefined, ["spellbook", "robe"], "Wizard", strength, companion);
        this.spell = spell;
    }

    castSpell(target) {
        console.log(`${this.name} casts ${this.spell} on ${target.name}!`);
        target.health -= Math.random() * this.strength + 1;
        console.log(`${target.name}'s health is now ${target.health}.`);
    }
}

// Test new role adventurers

const fighter = new Fighter("Aragorn", 40, leo);
const healer = new Healer("Elrond", 30, frank, 25);
const wizard = new Wizard("Gandalf", 35, leo, "Fireball");

const targetAdventurer = new Adventurer("Orc", undefined, [], "Fighter", 70, null);

fighter.attack(targetAdventurer);
healer.heal(targetAdventurer);
wizard.castSpell(targetAdventurer);