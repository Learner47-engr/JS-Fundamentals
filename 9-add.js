function add(a, b) {
    return a + b;
}

const num1Arg = process.argv[2];
const num2Arg = process.argv[3];

// Convert the arguments to integers using parseInt().
// The '10' ensures base-10 (decimal) conversion.
const integer1 = parseInt(num1Arg, 10);
const integer2 = parseInt(num2Arg, 10);

// Check if both arguments were successfully converted to valid numbers.
// If either is NaN (Not-a-Number), it means the input was invalid.
if (isNaN(integer1) || isNaN(integer2)) {
    console.log("Usage: node add_integers.js <integer1> <integer2>");
    console.log("Please provide two valid integers as arguments.");
} else {
    // If both are valid integers, call the 'add' function and print the result.
    let sum = add(integer1, integer2);
    console.log(sum);
}