// const numberOfUserArguments = process.argv.length - 2;

// if (numberOfUserArguments === 0) {
//     // If no arguments are passed by the user
//     console.log("No argument");
// } else if (numberOfUserArguments === 1) {
//     // If exactly one argument is passed by the user
//     console.log("Argument found");
// } else {
//     // If more than one argument is passed by the user
//     console.log("Arguments found");

let count = 0;
while (process.argv[count + 2] !== undefined) {
    count++;
}

const numberOfUserArguments = count;

// if (numberOfUserArguments === 0) {
//     console.log("No argument");

if (process.argv[2] === undefined) {
    // If no arguments are passed by the user (i.e., process.argv[2] is undefined)
    console.log("No argument");
} else {
    // If at least one argument is passed by the user, print the first one.
    console.log(process.argv[2]);
}