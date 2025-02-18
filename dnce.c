#include <stdio.h>

// Function to calculate factorial
unsigned long long factorial(int n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1); // Recursive call
    }
}

int main() {
    int number;

    // Prompt the user for input
    printf("Enter a positive integer: ");
    scanf("%d", &number);

    // Check if the input is valid
    if (number < 0) {
        printf("Error! Factorial of a negative number doesn't exist.\n");
    } else {
        // Calculate and display the factorial
        unsigned long long result = factorial(number);
        printf("Factorial of %d = %llu\n", number, result);
    }

    return 0;
}
