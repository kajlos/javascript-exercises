const fibonacci = function(number) {
    if (number < 0) return 'OOPS';
    if( number == 0 ) return 0;
    if(number == 1 ) return 1;
    let sum =0;
    let a =0;
    let b =1;
    for(i =1; i < number; i++){
        sum = a + b;
        a = b;
        b = sum;
        console.log(sum);
    }
    console.log(sum);
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
fibonacci(1);