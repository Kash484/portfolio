```js

    // 1. Create a JavaScript object named `resume`
    const resume = {
        fullName: "Kash Tubati", 
        email: "kash.tubati@gmail.com",
        education: "9th Grade", 
        address: {     
            city: "San Diego",
            state: "California",
            country: "USA"
        },
        skills: ["JavaScript", "Python", "Problem Solving", "Debugging"]
    };

    // 2. Access and display properties using dot notation
    console.log("--- Personal Info ---");
    console.log("Name: " + resume.fullName);
    console.log("Email: " + resume.email);
    console.log("City: " + resume.address.city);

    // 3. Convert object to a JSON string
    let jsonString = JSON.stringify(resume);

    console.log("\n--- JSON String Representation ---");
    console.log(jsonString);

    // 4. Parse the JSON string back into a JavaScript object
    let parsedResume = JSON.parse(jsonString);

    console.log("\n--- Parsed JavaScript Object ---");
    console.log(parsedResume);