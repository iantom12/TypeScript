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
        const mask = Math.pow(10, digits - 1);
        const first = Math.floor(x / mask);
        const last = Math.floor(x % 10);
        if (first !== last) {
            return false;
        }
        x = Math.floor(x % mask);
        x = Math.floor(x / 10);
        digits -= 2;
    }
    return true;
}
console.log(isNumPalindrome(151));
console.log(isNumPalindrome(320));
