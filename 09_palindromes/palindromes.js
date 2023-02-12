const palindromes = function (str) {
	let reMove = /[^A-Za-z0-9]/g;
	let lowerCase = str.toLowerCase().replace(reMove, '');
	let reverseStr = lowerCase.split('').reverse().join('');
	return reverseStr === lowerCase;
};

// Do not edit below this line
module.exports = palindromes;
