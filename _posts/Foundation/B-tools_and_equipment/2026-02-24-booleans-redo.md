```js

    // --- Homework: Boolean Logic ---
    // Function to check if a number is both positive AND even
    function isPositiveAndEven(num) {
        // Check if number is greater than 0
        let isPositive = num > 0;
    
        // Check if number is divisible by 2 with no remainder
        let isEven = num % 2 === 0;
    
        // Use the logical AND operator (&&) to ensure both are true
        return isPositive && isEven;
    }

    // Test the function with an input of 8
    console.log("Is 8 positive and even?");
    console.log(isPositiveAndEven(8)); // Output: true

    // Extra test with a negative even number to verify logic
    console.log("Is -4 positive and even?");
    console.log(isPositiveAndEven(-4)); // Output: false