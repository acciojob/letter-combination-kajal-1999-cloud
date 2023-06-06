function letterCombinations(input_digit) {
  //Complete the function
	var mapping = {
		  2: "abc",
		  3: "def",
		  4: "ghi",
		  5: "jkl",
		  6: "mno",
		  7: "pqrs",
		  8: "tuv",
		  9: "wxyz",
		  0: "0",
		  1: "1"
	};

	var stringArray = [''];

	for(let i = 0; i < input_digit.length; i++){
		let digit = input_digit[i];
		let letters = mapping[digit];
		let newCombination = [];

		for(let j = 0; j < stringArray.length; j++){
			var combination = stringArray[j];

			for(let k = 0; k < letters.length; k++){
				newCombination.push(combination + letters[k]);
			}
		}
		stringArray = newCombination;
	}
	return stringArray;
}

module.exports = letterCombinations;