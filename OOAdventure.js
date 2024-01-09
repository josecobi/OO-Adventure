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

    }
  }

// Create `Adventurer` class
class Adventurer extends Character {
    
    constructor(name, health, inventory, role, strength, companion) {
        super(name, health, inventory);
        // Add property role to the adventurer
        this.role = role;
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
const robin = new Adventurer("Robin", undefined, ["sword", "potion", "artifact"],"Warrior", 80, leo);
// Call the roll method on each
robin.roll()
robin.companion.roll();
robin.companion.companion.roll();


