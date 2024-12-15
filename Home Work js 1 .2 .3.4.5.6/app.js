///Home work number 1///

// Function to return and print the type of a parameter
function getTypeAndLog(param) {
    const type = typeof param;
    console.log(`Type of parameter: ${type}`);
    return type;
}

// Call the function with five different types of parameters
getTypeAndLog({});          // Object
getTypeAndLog(true);        // Boolean
getTypeAndLog(42);          // Number
getTypeAndLog("Hello");     // String
getTypeAndLog(undefined);   // Undefined


///Home work numer 2

/**
 * Converts between human years and dog years.
 * @param {number} age - The age to convert.
 * @param {string} [conversionType="toDogYears"] - The conversion type: "toDogYears" or "toHumanYears".
 * @returns {number} - The converted age.
 */
function calculateDogAge(age, conversionType = "toDogYears") {
    if (conversionType === "toDogYears") {
        const dogYears = age * 7;
        console.log(`${age} human years is approximately ${dogYears} dog years.`);
        return dogYears;
    } else if (conversionType === "toHumanYears") {
        const humanYears = age / 7;
        console.log(`${age} dog years is approximately ${humanYears.toFixed(2)} human years.`);
        return humanYears;
    } else {
        console.log("Invalid conversion type. Use 'toDogYears' or 'toHumanYears'.");
        return null;
    }
}

// Example Calls:
calculateDogAge(5); // Default conversion: 5 human years to dog years
calculateDogAge(35, "toHumanYears"); // Convert 35 dog years to human years


///Home work 3 

// Hardcoded account balance
let accountBalance = 1000;

/**
 * Simulates an ATM withdrawal.
 * @param {number} amount - The amount to withdraw.
 * @returns {string} - A message indicating the result of the transaction.
 */
function withdrawCash(amount) {
    if (amount > accountBalance) {
        console.log("Not enough money.");
        return "Not enough money.";
    } else if (amount <= 0) {
        console.log("Invalid amount. Please enter a positive number.");
        return "Invalid amount. Please enter a positive number.";
    } else {
        accountBalance -= amount;
        const message = `You withdrew $${amount}. Remaining balance: $${accountBalance}.`;
        console.log(message);
        return message;
    }
}

// Example calls:
withdrawCash(500); // Successful withdrawal
withdrawCash(600); // Not enough money

// Bonus: Interactive ATM with prompt()
function atmPrompt() {
    const userInput = prompt("Enter the amount you want to withdraw:");
    const amount = parseFloat(userInput); // Convert input to a number
    if (isNaN(amount)) {
        alert("Invalid input. Please enter a numeric value.");
    } else {
        const result = withdrawCash(amount); // Use the ATM function
        alert(result); // Display the result to the user
    }
}

// Uncomment the following line to test the prompt functionality in a browser:
// atmPrompt();



///Home work 4


function tellStory([dogan, mood, activity]) {
    return `This is ${dogan}. ${dogan} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`;
}

// Example usage:
const story = tellStory(["Alice", "happy", "painting"]);
console.log(story); // Output to the console
alert(story);       // Display as an alert



///Home work 5

///Write a function that will take an array of 5 numbers as an argument and return the sum.

///Using the reduce() method
const sum=( n1,n2)=>{
    return n1+n2
}
console.log(sum(100,3))

/// Home work 6

///When given any array of strings (should work with array with any number of elements)

function concatenateStrings(stringsArray) {
    return stringsArray.join(' '); // Joins all elements with a space between them
}

// Example usage:
const strings = ["Hello", "there", "students", "of", "SEDC", "!"];
const result = concatenateStrings(strings);

console.log(result); // Output: "Hello there Friend of SEDC!"
alert(result);       // Displays "Hello there Friend of SEDC!" in an alert



