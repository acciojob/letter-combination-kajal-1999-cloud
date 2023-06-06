let mapping = {
  "2" : "abc",
  "3" : "def",
  "4" : "ghi",
  "5" : "jkl" ,
  "6" : "mno" , 
  "7" : "pqrs" , 
  "8" : "tuv"  ,
  "9" : "wxyz"
}

let results = [] ;
let searchString = "23" ;

function solve(index, calculatedString) {
  if(index >= searchString.length) {
    results.push(calculatedString) ;
    return ;
  }
  let curString = mapping[searchString[index]] ;// mapping[searchString[0]] => mapping["2"] => "abc"
  for(let i = 0 ; i < curString.length ; i++ ) {
    solve(index + 1, calculatedString + curString[i]) ; // index=1, calculatedString = ("" + curString)=> abc;
  }
}

solve(0, "") ;
console.log(results) ;

module.exports = solve;
