const sumAll = function(a, b) {
    let totalSum = 0;
    let error = 'ERROR';
    let biggerNum = Math.max(a, b);
    let smallerNum = Math.min(a, b);
    for (let i = smallerNum; i <= biggerNum; i++) {
        totalSum += i;
    }
    if (biggerNum < 0 || smallerNum < 0) {
        return error;
    } else if (isNaN(biggerNum) || isNaN(smallerNum)) {
        return error;
    }
    return totalSum;
}


// Do not edit below this line
module.exports = sumAll;
