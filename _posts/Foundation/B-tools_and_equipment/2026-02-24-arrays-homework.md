```js 

    // --- Exercise 1: Array Basics ---

    // 1. Create an array with 5 items
    const myGames = ["COD", "Minecraft", "Forza", "Clash", "Roblox"];

    // 2. Print the entire array
    console.log("Entire Array:", myGames);

    // 3. Access and print the first element (index 0)
    console.log("First Element:", myGames[0]);

    // 4. Access and print the last element
    // We use .length - 1 because the count starts at 0
    console.log("Last Element:", myGames[myGames.length - 1]);

    // 5. Print the total number of items
    console.log("Total Items in Array:", myGames.length);

    // --- Exercise 2: Modify Arrays ---

    // 1. Start with the original shopping list
    let shoppingList = ["milk", "eggs", "bread", "cheese"];
    console.log("Original List:", shoppingList);

    // 2. Change the second item to "butter" (index 1)
    shoppingList[1] = "butter";

    // 3. Add "yogurt" to the end using push()
    shoppingList.push("yogurt");

    // 4. Remove "bread" (which is at index 2)
    // splice(startingIndex, deleteCount)
    shoppingList.splice(2, 1);

    // 5. Print the final array
    console.log("Final Modified List:", shoppingList);

    // --- Exercise 3: Loop Through an Array ---

    // 1. Create the numbers array
    const numbers = [10, 25, 30, 15, 20];
    let sum = 0;

    console.log("--- Processing Numbers ---");

    // 2. Loop through the array
    for (let i = 0; i < numbers.length; i++) {
        let currentNum = numbers[i];
    
        // Print each number with a message
        console.log(`Number: ${currentNum}`);
    
        // Print each number multiplied by 2
        console.log(`Multiplied by 2: ${currentNum * 2}`);
    
        // Calculate the sum by adding currentNum to the previous total
        sum += currentNum;
    }

    // 3. Print the final calculated sum
    console.log("--------------------------");
    console.log("Total Sum of all numbers:", sum);