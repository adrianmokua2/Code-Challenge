
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// This categorizes the diffferent salary categories
const kraTaxRates = {
    lowerThreshold: 24000,
    upperThreshold: 32333,
    lowerRate: 10,
    upperRate: 25
};

const nhifDeductions = 500;

const nssfDeductions = 0.06;

// this function is used to calculate the net salary
function calculateNetSalary(basicSalary) {
    let payee;

    if (basicSalary < kraTaxRates.lowerThreshold) {
        payee = 0;
    } else if (basicSalary <= kraTaxRates.upperThreshold) {
        payee = (basicSalary - kraTaxRates.lowerThreshold) * (kraTaxRates.lowerRate / 100);
    } else {
        payee = (kraTaxRates.upperThreshold - kraTaxRates.lowerThreshold) * (kraTaxRates.lowerRate / 100) +
                (basicSalary - kraTaxRates.upperThreshold) * (kraTaxRates.upperRate / 100);
    }

    const grossSalary = basicSalary - payee;
    const netSalary = grossSalary - nhifDeductions - (basicSalary * nssfDeductions);

    return {
        grossSalary: grossSalary.toFixed(2),
        netSalary: netSalary.toFixed(2)
    };
}
// the user is prompted to enter their basic salary and their deductions deducted.
rl.question('Enter the basic salary: ', (answer) => {
    const basicSalary = parseFloat(answer);

    if (isNaN(basicSalary) || basicSalary < 0) {
        console.log('Invalid input. Basic salary should be a non-negative number.');
    } else {
        const salaryDetails = calculateNetSalary(basicSalary);
        console.log('Gross Salary:', salaryDetails.grossSalary);
        console.log('Net Salary:', salaryDetails.netSalary);
    }

    rl.close();
});
