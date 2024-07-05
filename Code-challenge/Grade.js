const readline = require('readline');

// Creating an interface for reading and writing input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to determine grade based on marks
function studentGradeGenerator(marks) {
    let grade;
    switch (true) {
        case (marks < 40):
            grade = 'E';
            break;
        case (marks >= 40 && marks < 50):
            grade = 'D';
            break;
        case (marks >= 50 && marks < 60):
            grade = 'C';
            break;
        case (marks >= 60 && marks < 80):
            grade = 'B';
            break;
        case (marks >= 80 && marks <= 100):
            grade = 'A';
            break;
        default:
            grade = 'Invalid marks';
    }
    return grade;
}

// Prompting the user for input
rl.question("Enter the marks: ", function(inputMarks) {
    // Parsing input to integer
    const marks = parseInt(inputMarks);

    // Validating input
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log('Invalid input. Please enter a number between 0 and 100.');
    } else {
        // Generating and displaying grade
        const grade = studentGradeGenerator(marks);
        console.log(`Your grade is: ${grade}`);
    }

    // Closing the readline interface
    rl.close();
});
