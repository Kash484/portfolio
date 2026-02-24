```js

    /**
    * Challenge: Sum Numbers from 1 to n
    * This function uses a for loop to iterate from 1 up to 'n'
    * and keeps a running total in the 'sum' variable.
    */
    function sumNumbers(n) {
        let sum = 0; // Initialize our starting sum

        // The loop starts at 1, runs while i is less than or equal to n, 
        // and increments i by 1 each time.
        for (let i = 1; i <= n; i++) {
            sum += i; // Add the current value of i to our sum
        }

        return sum; // Return the final calculation
    }

    // Test the function with an input of 5
    let result = sumNumbers(5);

    // Print the result to the console
    console.log("The sum of numbers from 1 to 5 is:", result);