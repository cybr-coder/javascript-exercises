const reverseString = function(string) {
    let revStr = '';
    for (i = string.length -1; i >= 0; i-- ) {
        revStr += string[i];
    }
    return revStr;
};

// Do not edit below this line
module.exports = reverseString;
