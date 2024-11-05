function evaluateRisk(income, hasLoans, latePayments, isStudent){
    if ((income <= 20000 && latePayments > 3) ||(hasLoans && isStudent) ) {
        return "High";
    }
    if ((income >= 20000 && income <= 50000 && latePayments <= 2) || (hasLoans && !isStudent)) {
        return "Moderate";
    }
    return "Low";
}

console.log(evaluateRisk(15000, true, 4, true)); 


