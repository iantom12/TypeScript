"use strict";
function isPalindrome(s) {
    let j = s.length - 1;
    for (let i = 0; i < j; i++, j--) {
        while (i < j && !isValid(s[i])) {
            i++;
        }
        while (i < j && !isValid(s[j])) {
            j--;
        }
        if (i < j && s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome('bob'));
function isValid(value) {
    return value.match(/^[A-Za-z0-9]+$/);
}
function isNumPalindrome(x) {
    if (x < 0) {
        return false;
    }
    let digits = Math.floor(Math.log10(x) + 1);
    while (digits > 1) {
        //mask: 123=100 1234=1000
        const mask = Math.pow(10, digits - 1);
        //get first digit: 1234=1
        const first = Math.floor(x / mask);
        //last digit 1234=4
        const last = Math.floor(x % 10);
        if (first !== last) {
            return false;
        }
        //trim first digit:1234=234
        x = Math.floor(x % mask);
        //trim last digit: 234=23
        x = Math.floor(x / 10);
        //reduce
        digits -= 2;
    }
    return true;
}
console.log(isNumPalindrome(151));
console.log(isNumPalindrome(320));
