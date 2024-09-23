#!/usr/bin/env node

import { confirm, input, select } from "@inquirer/prompts";

class Person {
  private _personality: string;

  constructor() {
    this._personality = "Mystery";
  }

  get personality() {
    return this._personality;
  }

  set personality(value: string) {
    this._personality = value;
  }

  askQuestion(answer: number) {
    if (answer === 1) {
      this.personality = "introvert";
    } else if (answer === 2) {
      this.personality = "extrovert";
    }
  }
}

class Student extends Person {
  private _name: string;

  constructor() {
    super();
    this._name = "";
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

class Main {
  async ask() {
    try {
      const choice = await select({
        message:
          "Do you feel more energized and rejuvenated after spending time alone or after socializing with a group of people?",
        choices: [
          { name: "Alone", value: 1 },
          { name: "Socializing", value: 2 },
        ],
      });
      if (choice) {
        const person = new Person();
        person.askQuestion(choice);
        const name = await input({
          message: "What is your name?",
        });
        const student = new Student();
        student.name = name;
        console.log(
          `Hello ${student.name}! your personality is ${student.personality}!`
        );
        const again = await confirm({
          message: "Would you like to try again?",
        });
        if (again) {
          this.ask();
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === "ExitPromptError") {
          process.exit(0);
        } else {
          console.error(error.message);
          process.exit(1);
        }
      }
    }
  }
}

const main = new Main();
main.ask();
