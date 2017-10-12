// create an array of numbers
var numbers = [1,2,3,4,5,6,7];
//create a variable to hold the sum
var sum = 0
//loop over the array, incrementing the sum variable

function adder(number){
  sum += number;
}

numbers.forEach(adder);

// print the sum variable
console.log(sum);
