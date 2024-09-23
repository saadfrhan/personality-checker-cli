## OOP CLI

This project demonstrates fundamental Object-Oriented Programming (OOP) concepts using a simple Node.js script. The program uses classes, inheritance, encapsulation, and user input to create an interactive personality quiz.

## Key OOP Concepts Demonstrated

- **Classes**: The script defines `Person`, `Student`, and `Main` classes to encapsulate related data and behavior.
- **Inheritance**: The `Student` class inherits from the `Person` class, demonstrating how a subclass can extend the functionality of a parent class.
- **Encapsulation**: Properties like `_personality` and `_name` are managed through getter and setter methods, controlling how data is accessed and modified.
- **Abstraction**: Users are abstracted from the internal workings of personality assignment and only interact with simple inputs like name and choice.

## How It Works

1. The script presents a question asking whether you feel more energized alone or while socializing.
2. Based on your answer, the program classifies you as an "introvert" or "extrovert."
3. You are then prompted to enter your name, and the program prints a message showing your name and personality type.
4. You are given the option to run the quiz again.

## Setup

```
git clone https://github.com/saadfrhan/oop-cli
cd oop-cli
pnpm i
pnpm build
pnpm link --global
oop-cli
```

## Example Usage

```bash
Do you feel more energized and rejuvenated after spending time alone or after socializing with a group of people?
1) Alone
2) Socializing
# You choose "Alone"
What is your name?
# You type "Sheldon"
Hello Sheldon! Your personality is introvert!
Would you like to try again?
```

## Learning Points

- **Encapsulation** is shown by using private properties like `_personality` and `_name` that are only modified through methods.
- **Inheritance** allows the `Student` class to extend the `Person` class, reusing and expanding functionality.
- **User Interaction** is achieved through prompts, creating a smooth, interactive experience.

## Contribute

1. Fork the repository
2. Create a new branch (`git checkout -b improve-feature`)
3. Make, add, commit, and push your changes
4. Open a pull request
