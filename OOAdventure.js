// >>>>>>>>>>>>>>>>>>>>Part 1: Humble Beginnings <<<<<<<<<<<<<<<<<<<<<<
// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat",
//         companion: {
//             name: "Frank",
//             type: "Flea",
//             belongings: ["small hat", "sunglasses"]
//         }
//     },
//     roll (mod = 0) {
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`)

//     }
// }

// adventurer.inventory.forEach((item) => console.log(item));

// adventurer.roll()
// adventurer.roll()
// adventurer.roll()
// adventurer.roll()

//>>>>>>>>>>>>>>>>>>>>>>>>>>Part 2: Class Fantasy <<<<<<<<<<<<<<<<<<<<<<<
class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }

    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)

    }
  }

//   const robin = new Character("Robin");
//   robin.inventory = ["sword", "potion", "artifact"];
//   robin.companion = new Character("Leo");
//   robin.companion.type = "Cat";
//   robin.companion.companion = new Character("Frank")
//   robin.companion.companion.type = "Flea"
//   robin.companion.companion.inventory = ["small hat", "sunglasses"];

//   robin.companion.roll();
//   robin.companion.companion.roll();

  //>>>>>>>>>>>>>>>>>>>>>Part 3: Class features <<<<<<<<<<<<<<<<<<<<<

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
const frank = new Companion("Frank", ["small hat", "sunglasses"], "flea");
console.log(frank);
const leo = new Companion("Leo", ["Healing kit", "boots", "sword", "hat"], "cat", frank);
console.log(leo);
const robin = new Adventurer("Robin", 100, ["sword", "potion", "artifact"],"Warrior", 80, leo);
console.log(robin);
robin.roll()
robin.companion.roll();
robin.companion.companion.roll();