const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  const sum = array.reduce(function(total,item){
    return total +=item;
  },0)
  return sum;
};

const multiply = function(array) {
  const multiplied = array.reduce(function(total,item){
    return total *=item;
  },1);
  return multiplied;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
  if(a === 0) return 1;
  let factorial2= 1 ;
  for(a; a>1 ;a--){
    factorial2 = factorial2 *a;
  }
  return factorial2;
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
