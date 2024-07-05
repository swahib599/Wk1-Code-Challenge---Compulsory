Problem 1 Description

The function `studentMarksGen` takes a single argument `marks` which should be a number between 0 and 100. It returns a grade based on the following criteria:

- "A": marks 80 and above
- "B": marks 60 to 79
- "C": marks 50 to 59
- "D": marks 40 to 49
- "not possible": marks below 40

 Code Implementation


function studentMarksGen(marks) {
    if (marks < 40) {
        return "not possible";
    } else if (marks < 50) {
        return "D";
    } else if (marks < 60) {
        return "C";
    } else if (marks < 80) {
        return "B";
    } else {
        return "A";
    }
}

console.log(studentMarksGen(40)); // Output: D
console.log(studentMarksGen(55)); // Output: C
console.log(studentMarksGen(70)); // Output: B
console.log(studentMarksGen(85)); // Output: A
console.log(studentMarksGen(30)); // Output: not possible


2   Problem 2

This repository contains a JavaScript function `speedDetector` that detects a driver's speed and determines if they should receive a warning, points on their license, or have their license suspended.

Description

The `speedDetector` function takes a single argument `speed` and performs the following checks:

1. If the speed is less than or equal to 70, it prints "OK".
2. If the speed is greater than 70:
    - It calculates the number of points by subtracting 70 from the speed, dividing the result by 5, and rounding down to the nearest whole number.
    - If the points are 12 or more, it prints "License suspended".
    - If the points are less than 12, it prints the number of points.

 Implementation


function speedDetector(speed) {
  if (speed <= 70) {
    console.log("OK");
  } else {
    let points = Math.floor((speed - 70) / 5);
    if (points >= 12) {
      console.log("License suspended");
    } else {
      console.log("Points:", points);
    }
  }
}

// Example usage:
speedDetector(66);  // Output: OK
speedDetector(85);  // Output: Points: 3
speedDetector(130); // Output: License suspended


3 Problem3 

This  contains a simple salary calculator implemented in JavaScript. It includes functions to calculate the gross salary based on basic pay and benefits, and to calculate the net salary after deducting a fixed percentage (12%) for taxes or other deductions.

Functions

 `calculateGrossSalary(basic, benefits)`

This function takes two arguments:
- `basic`: The basic salary.
- `benefits`: The additional benefits.

It returns the gross salary, which is the sum of the basic salary and benefits.

`calculateNetSalary(grossSalary)`

This function takes one argument:
- `grossSalary`: The gross salary.

It returns the net salary, which is the gross salary minus 12% for deductions (e.g., taxes).

Usage

The script demonstrates the usage of these functions with the following steps:
1. Define the basic salary and benefits.
2. Calculate the gross salary using `calculateGrossSalary`.
3. Calculate the net salary using `calculateNetSalary`.
4. Print the net salary to the console.


function calculateGrossSalary(basic, benefits) {
  return basic + benefits;
}

function calculateNetSalary(grossSalary) {
  return Math.abs(grossSalary - grossSalary * 0.12);
}

let basic = 43000;
let benefits = 5000;
let grossSalary = calculateGrossSalary(basic, benefits);

console.log(calculateNetSalary(grossSalary));

