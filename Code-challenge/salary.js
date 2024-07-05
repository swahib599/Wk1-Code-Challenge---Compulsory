const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Main function to calculate net salary
function calculateNetSalary() {
    rl.question("Enter the basic salary: ", function(input) {
        let basicSalary = parseFloat(input);

        if (isNaN(basicSalary) || basicSalary < 0) {
            console.log("Invalid input. Please enter a positive number.");
            rl.close();
            return;
        }

        // Constants for tax rates and deductions
        const kraRates = [
            { min: 0, max: 24000, rate: 0.1 },
            { min: 24001, max: 32333, rate: 0.25 },
            { min: 32334, max: 500000, rate: 0.3 },
            { min: 500001, max: 800000, rate: 0.325 },
            { min: 800001, max: Infinity, rate: 0.35 }
        ];

        const nhifRates = [
            { min: 0, max: 5999, deduction: 150 },
            { min: 6000, max: 7999, deduction: 300 },
            { min: 8000, max: 11999, deduction: 400 },
            { min: 12000, max: 14999, deduction: 500 },
            { min: 15000, max: 19999, deduction: 600 },
            { min: 20000, max: 24999, deduction: 750 },
            { min: 25000, max: 29999, deduction: 850 },
            { min: 30000, max: 34999, deduction: 900 },
            { min: 35000, max: 39999, deduction: 950 },
            { min: 40000, max: Infinity, deduction: 1000 }
        ];

        const nssfTier1Limit = 7000;
        const nssfTier2Limit = 36000;

        // Calculate deductions
        let payeTax = calculatePAYE(basicSalary, kraRates);
        let nhifDeduction = calculateNHIF(basicSalary, nhifRates);
        let nssfDeduction = calculateNSSF(basicSalary, nssfTier1Limit, nssfTier2Limit);

        // Calculate net salary
        let netSalary = basicSalary - payeTax - nhifDeduction - nssfDeduction;

        // Output the calculated net salary
        console.log(`Net Salary: ${netSalary.toFixed(2)}`);

        // Close the readline interface
        rl.close();
    });
}

// Function to calculate PAYE tax
function calculatePAYE(salary, rates) {
    let tax = 0;
    for (let i = 0; i < rates.length; i++) {
        if (salary > rates[i].min) {
            let taxableAmount = Math.min(salary, rates[i].max) - rates[i].min;
            tax += taxableAmount * rates[i].rate;
        }
    }
    return tax;
}

// Function to calculate NHIF deduction
function calculateNHIF(salary, rates) {
    let deduction = 0;
    for (let i = 0; i < rates.length; i++) {
        if (salary >= rates[i].min && salary <= rates[i].max) {
            deduction = rates[i].deduction;
            break;
        }
    }
    return deduction;
}

// Function to calculate NSSF deduction
function calculateNSSF(salary, tier1Limit, tier2Limit) {
    let nssfTier1 = Math.min(salary, tier1Limit) * 0.06;
    let nssfTier2 = Math.max(0, salary - tier1Limit) * 0.06;
    return nssfTier1 + nssfTier2;
}

// Calling the function to start calculating net salary
calculateNetSalary();
