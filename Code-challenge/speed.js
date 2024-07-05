const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to detect speed and calculate demerit points
function speedDetector(speed) {
    const speedLimit = 70;  // Defines speed limit

    if (speed < speedLimit) {
        return "Ok";  // Speed is within the limit
    } else {
        const points = Math.floor((speed - speedLimit) / 5);  // Calculate demerit points
        if (points >= 12) {
            return "License suspended";  // Too many demerit points
        } else {
            return `Points: ${points}`;  // Return number of demerit points
        }
    }
}

// Prompt the user for input
function promptUser() {
    rl.question('Enter the speed of the car: ', (input) => {
        const speed = parseFloat(input);

        // Validate input
        if (isNaN(speed)) {
            console.log('Invalid input. Please enter a valid number.');
        } else {
            // Call speedDetector and display result
            const result = speedDetector(speed);
            console.log(result);
        }

        // Close the readline interface
        rl.close();
    });
}

// Start the program by prompting the user
promptUser();
