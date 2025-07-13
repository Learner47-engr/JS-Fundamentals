const numberOfUserArguments = process.argv.length - 2;

if (numberOfUserArguments === 0) {
    // If no arguments are passed by the user
    console.log("No argument");
} else if (numberOfUserArguments === 1) {
    // If exactly one argument is passed by the user
    console.log("Argument found");
} else {
    // If more than one argument is passed by the user
    console.log("Arguments found");
}
