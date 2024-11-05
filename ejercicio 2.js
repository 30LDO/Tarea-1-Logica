function recommendProduct(age, isMember, purchaseHistory){
    if ((isMember && purchaseHistory.tech >= 5) || ((age >= 18 && age <= 30) && purchaseHistory.fashion >= 2)) {
        return "High-Tech product"
    }
    if ((!isMember && purchaseHistory.other >= 3) || (age >= 25 && age <= 40)) {
        return "Fashion product"
    }
    return "Generic product"

}

console.log(recommendProduct(22, true, { tech: 6, fashion: 1, other: 2 })); 