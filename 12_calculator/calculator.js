const add = function(num1, num2) {
	//take two numbers, add them.
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	//loop thru an array and return a single value.
  return arr.reduce((total, current) => total + current , 0);
};

const multiply = function(arr) {
  return arr.reduce((total, current) => total * current, 1);
};

const power = function(num1, power) { 
  let total = 1;
  for (let i=0; i < power; i++){
    total = total * num1;
    console.log(total);
  }
  return total;
};

power(4, 3);


const factorial = function(num) {
	//take num and apply num! If 2!, then it's 1*2. If it's 3, 1 * 2 * 3. Take 3, keep track of some accumulator value (1).
  //1 * (1+1) * (1 + 2); 1 * (1 + a) * (1 + (1+a)); stop when 1 + a = 3;
  let total = 1;
  if (num == 0 || num == 1)  {
    return 1;
  }
  else {
    for (i = 0; i < num; i++){
      total = total * (1 + i);
    }
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

