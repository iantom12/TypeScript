function isLeapYear(year:number){
    if(year%4!==0){
        return false;
    }
    if(year%400===0){
        return true;
    }
    return (year%100 !== 0)
}
console.log(isLeapYear(2023));
console.log(isLeapYear(1972));
console.log(isLeapYear(1912));
console.log(isLeapYear(1872));
console.log(isLeapYear(1772));