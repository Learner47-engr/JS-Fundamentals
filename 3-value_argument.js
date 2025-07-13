

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