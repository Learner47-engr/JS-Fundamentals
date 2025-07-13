// Get the first user-provided argument from the command line.
const sizeArg = process.argv[2];

// Attempt to convert the argument to an integer.
const size = parseInt(sizeArg, 10);

// Check if the converted number is invalid (NaN) or not a positive integer.
// If it's not a valid positive integer, print the error message and exit the script.
if (isNaN(size) || size <= 0) {
    console.log("Missing size");
    return; // Exit the script early
}

// If the size is valid, proceed to print the square.
// Use a 'for' loop for the rows of the square.
for (let i = 0; i < size; i++) {
    let row = ""; // Initialize an empty string for the current row.

    // Use an inner 'for' loop for the columns (characters) in each row.
    for (let j = 0; j < size; j++) {
        row += "X"; // Append 'X' for each column.
    }
    
    // Print the completed row. Each console.log prints a new line.
    console.log(row);
}