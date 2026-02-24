```js

    // Homework: Nested Conditionals (Numbers 1-50)
    // Checking factors of 50 and divisibility by 3

    const factorsOf50 = [1, 2, 5, 10, 25, 50];

    for (let i = 1; i <= 50; i++) {
        // Level 1: Check if number is greater than 25
        if (i > 25) {
            // Level 2 (Nested 1): Check if it's a factor of 50
            if (factorsOf50.includes(i)) {
                console.log(`${i} is in the upper range and is a factor of 50.`);
            } else {
                // Level 3 (Nested 2): Check if these large non-factors are divisible by 3
                if (i % 3 === 0) {
                    console.log(`${i} is in the upper range and is divisible by 3.`);
                } else {
                    console.log(`${i} is in the upper range (not a factor, not divisible by 3).`);
                }
            }
        } else {
            // Level 2 (Nested 3): Check if it's a factor of 50
            if (factorsOf50.includes(i)) {
                // Level 3 (Nested 4): Check if it's an even factor
                if (i % 2 === 0) {
                    console.log(`${i} is an EVEN factor of 50.`);
                } else {
                    console.log(`${i} is an ODD factor of 50.`);
                }
            } else {
                // Level 3 (Nested 5): Check if these small non-factors are divisible by 3
                if (i % 3 === 0) {
                    console.log(`${i} is 25 or less and is divisible by 3.`);
                } else {
                    console.log(`${i} is 25 or less (not a factor, not divisible by 3).`);
                }
            }
        }
    }


