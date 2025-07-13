const numberOfOccurrencesArg = process.argv[2];
const numOccurrences = parseInt(numberOfOccurrencesArg, 10);
if (isNaN(numOccurrences) || numOccurrences <= 0) {
    // This is the first allowed console.log.
    console.log("");
    // Use return to exit the script early if the argument is invalid.
    // This avoids needing an 'else' block for the main logic.
    return; 
}
let outputMessage = "";
let i = 0;

while (i < numOccurrences) {
    outputMessage += "C is fun\n"; // Append a generic message followed by a newline.
    i++; // Increment the counter.
}

console.log(outputMessage);