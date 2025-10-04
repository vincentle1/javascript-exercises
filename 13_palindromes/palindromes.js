const palindromes = function (str) {
    let clean = str.toLowerCase().split('').filter(char => /[a-z0-9]/.test(char));
    let cleanString = clean.join('');
    let reverseString = clean.reverse().join('');

    if (cleanString == reverseString) {
        return true;
    }
    else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes; 
