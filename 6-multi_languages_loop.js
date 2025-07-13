const messages = [
    "C is fun",
    "Python is cool",
    "JavaScript is amazing"
];

let outputString = "";

for (let i = 0; i < messages.length; i++) {
    // Append the current message from the array to outputString.
    outputString += messages[i];
    
    // Add a newline character after each message.
    // This ensures each message appears on a separate line when printed.
    outputString += "\n";
}

console.log(outputString);