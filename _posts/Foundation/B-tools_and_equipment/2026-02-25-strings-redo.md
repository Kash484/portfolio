``` js

    // Three strings of varying lengths
    let str1 = "Homework";
    let str2 = "JavaScript is fun";
    let str3 = "I like coding";

    // Print the length of each string
    console.log(`Length of str1: ${str1.length}`);
    console.log(`Length of str2: ${str2.length}`);
    console.log(`Length of str3: ${str3.length}`);

    // Print the first and last character of each string
    console.log(`str1 first: ${str1[0]}, last: ${str1[str1.length - 1]}`);
    console.log(`str2 first: ${str2[0]}, last: ${str2[str2.length - 1]}`);
    console.log(`str3 first: ${str3[0]}, last: ${str3[str3.length - 1]}`);

    // Interpolate all three strings into a sentence
    let sentence = `${str1}: ${str2}. ${str3}!`;
    console.log(sentence);