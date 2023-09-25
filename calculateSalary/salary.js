function calcTaxOnTaxableIncome() { 
    // This function is used to calculate the percentage tax on income :
    let amount = 0;

    if (salary <= 12,298){
        amount += salary * 0.1;
    } else if (salary >= 12999 && salary <= 23885){
        amount += salary * 0.15;
    } else if (salary >= 23886 && salary < 35472){
        amount += salary * 0.2;
    } else if (salary >= 35472 && salary <= 47059){
        amount += salary * 0.25 
    } else if (income > 47059){
        amount +=  income * 0.3;
    }

    return amount
}


function calcRelief() {
    
    let releif = 2400;

    return relief 
}

function calcTotalIncome(){
    // finding the total taxable income for employee
    let total = salary + benefits;

    return total;

}

function calcNhifDeductions(){
    // this shows the differfent nhif levels and how they are taxed.
    let salaryInc = calcTotalIncome();
    let nhifAmount = 0;
    if (salaryInc >= 1000) {

        if (salaryInc >= 1000 && salaryInc <= 5999) {
            hifAmount += 150;
        } else if (salaryInc >= 6000 && salaryInc <= 7999) {
            nhifAmount += 300;
        } else if (salaryInc >= 8000 && salaryInc <= 11999) {
            nhifAmount += 400;
        } else if (salaryInc >= 12000 && salaryInc <= 14999) {
            nhifAmount += 500;
        } else if (salaryInc >= 15000 && salaryInc <= 19999) {
            nhifAmount += 600;
        } else if (salaryInc >= 20000 && salaryInc <= 24999) {
            nhifAmount += 750;
        } else if (salaryInc >= 25000 && salaryInc <= 29999) {
            nhifAmount += 850;
        } else if (salaryInc >= 30000 && salaryInc <= 34999) {
            nhifAmount += 900;
        } else if (salaryInc >= 35000 && salaryInc <= 39999) {
            nhifAmount += 950;
        } else if (salaryInc >= 40000 && salaryInc <= 44999) {
            nhifAmount += 1000;
        } else if (salaryInc >= 45000 && salaryInc <= 49999) {
            nhifAmount += 1100;
        } else if (salaryInc >= 50000 && salaryInc <= 59999) {
            nhifAmount += 1200;
        } else if (salaryInc >= 60000 && salaryInc <= 69999) {
            nhifAmount += 1300;
        } else if (salaryInc >= 70000 && salaryInc <= 79999) {
            nhifAmount += 1400;
        } else if (salaryInc >= 80000 && salaryInc <= 89999) {
            nhifAmount += 1500;
        } else if (salaryInc >= 90000 && salaryInc <= 99999) {
            nhifAmount += 1600;
        } else if (salaryInc >= 100000) {
            nhifAmount += 1700;
        }
    } else {
        nhifAmount += 0;
    }
    return nhifAmount;
}


function calcNssfDeduction() {
    

    let nssfAmount;

    if(salary > 18000){
        nssfAmount = 2160;
    } else {
        nssfAmount = 1080;
    }
    return Number(nssfAmount);
}

function deductNhif(){
    let deduction = calcNhifDeductions();
    return deduction ;

}


function  getTaxableIncome() {
    let taxableIncome = calcTotalIncome() - calcNssfDeduction();
    return taxableIncome;


}

function getPAYE(){

    let tax = calcTaxOnTaxableIncome()

    let amount =  tax- calcRelief();

    return amount 
}

function  calcNetPay() {

    let paye = getPAYE();
    let nhif = deductNhif();
    let relief = calcRelief();
    let nssf = calcNssfDeduction();
    let totalAmount = calcTotalIncome();

    let netPay = totalAmount - (paye + nhif + relief + nssf)
    return netPay;
}
