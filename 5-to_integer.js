const firstArgument = process.argv[2];
const convertedNumber = parseInt(firstArgument, 10);

if (isNaN(convertedNumber)) {
    // If convertedNumber is NaN (meaning the argument couldn't be parsed as an integer)
    console.log("Not a number");
} else {
    console.log(`My number: ${convertedNumber}`);
}
