# Adventurer and Role Classes
This code showcases the creation of diverse characters, their companions, and role-specific adventurers, along with their unique abilities.
It uses Object-Oriented Programming (OOP) principles in JavaScript, specifically classes and constructor functions. 
The implementation includes a base class `Character`, a derived class `Adventurer` with additional functionality, a `Companion` class, and role-specific adventurer classes (`Fighter`, `Healer`, and `Wizard`).
The duel function demonstrates the interactivity and dynamics between different instances of the Adventurer class.

## Screenshot
![image](https://github.com/josecobi/OO-Adventure/assets/58313777/9ae46245-7a58-4ce1-a3d8-7864461033f3)

## Classes

### Character Class

- **Properties:**
  - `name`: Represents the name of the character.
  - `health`: Represents the current health of the character, initialized to the maximum health (`MAX_HEALTH`).
  - `inventory`: An array containing the character's inventory items.

- **Methods:**
  - `roll(mod = 0)`: Simulates rolling a 20-sided die with an optional modifier.

### Adventurer Class (extends Character)

- **Additional Properties:**
  - `role`: Represents the role of the adventurer (`Fighter`, `Healer`, or `Wizard`).
  - `strength`: Represents the strength of the adventurer within a specified range.
  - `companion`: Represents a companion associated with the adventurer.

- **Additional Methods:**
  - `scout()`: Allows the adventurer to scout ahead by rolling the die.
  - `jump()`: Represents the adventurer's ability to jump.
  - `duel(opponent)`: Simulates a duel between two adventurers, reducing their health based on dice rolls.

### Companion Class (extends Character)

- **Additional Properties:**
  - `type`: Represents the type of the companion.
  - `companion`: Represents a companion associated with another companion.

- **Additional Methods:**
  - `heal()`: Represents the companion's ability to heal.
  - `follow()`: Represents the companion's ability to follow.

