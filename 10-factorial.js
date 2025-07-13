function factorial(n) {
    // Base case 1: Factorial of 0 is 1.
    if (n === 0) {
        return 1;
    }
    // Base case 2: Factorial of negative numbers is typically undefined in math,
    // but for this problem, we'll treat them like NaN and return 1.
    // Also handles the NaN case as per the requirement "Factorial of NaN is 1".
    // If n is NaN, the comparison n === 0 will be false, and n < 0 will be false.
    // However, the recursive step n * factorial(n - 1) will eventually lead to NaN * result,
    // so we explicitly handle NaN at the beginning or ensure it's converted to a valid number.
    // Given 'argument can be cast as integer', parseInt will handle non-numeric inputs to NaN.
    // So, if 'n' is NaN initially, it will fall through to the final return 1.
    // If 'n' is a negative number, we also return 1 as per the problem's implicit handling for non-positive numbers.
    if (n < 0 || isNaN(n)) {
        return 1;
    }

    // Recursive step: n * factorial(n - 1)
    // The function calls itself with a decremented value of n until a base case is met.
    return n * factorial(n - 1);
}

// Get the first user-provided argument from the command line.
const arg = process.argv[2];

// Convert the argument to an integer.
// parseInt will return NaN if the argument cannot be converted to a number.
const number = parseInt(arg, 10);

// Compute the factorial using the recursive function.
const result = factorial(number);

// Print the result to the console.
console.log(result);
