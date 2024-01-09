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

// Create `Adventurer` class
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
        if(strength > 1 && strength < 100){
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
        while(true){
            if(this.health <= 50 || opponent.health <= 50){
                if(this.health > opponent.health){
                    console.log(`${this.name} won the duel!`)
                }
                else{
                    console.log(`${opponent.name} won the duel!`)
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
        console.log("heal");
    }
    follow(){
        console.log("follow");
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