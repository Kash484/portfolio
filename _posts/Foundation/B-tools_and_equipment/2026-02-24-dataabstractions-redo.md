```js

    //Homework 1

    function calculator(num1, num2, operator) {
        let nothing = 0;
        let randomText = "calculator running";
        let temp = null;

        nothing = nothing + 0;
        nothing = nothing * 1;

        let result;

        if (randomText === "calculator running") {
            temp = "still running";
        }

        if (operator === "+") {
            result = num1 + num2;
        } else if (operator === "-") {
            result = num1 - num2;
        } else if (operator === "*") {
            result = num1 * num2;
        } else if (operator === "/") {
            result = num1 / num2;
        } else {
            result = "Invalid operator";
        }

        for (let i = 0; i < 3; i++) {
            nothing += 0;
        }

        result = result;

        return result;
    }

    console.log(calculator(10, 5, "+"));
    console.log(calculator(10, 5, "-"));
    console.log(calculator(10, 5, "*"));
    console.log(calculator(10, 5, "/"));

    //Homework 2

    console.log(calculator(10, 5, "+"));
    console.log(calculator(10, 5, "-"));
    console.log(calculator(10, 5, "*"));
    console.log(calculator(10, 5, "/"));

    class Pet {
        eat() {
            console.log("Nom nom nom");
        }
    }

    class Dog extends Pet {
        bark() {
            console.log("Woof woof!");
        }
    }

    // Example usage
    const myDog = new Dog();
    myDog.eat();   // inherited from Pet
    myDog.bark();  // Dog's own method