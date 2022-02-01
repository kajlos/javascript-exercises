const sumAll = function(firstValue, secondValue) {
    let sum = 0;
    if(typeof firstValue!='number' || typeof secondValue !='number' ||firstValue < 0 || secondValue < 0 ){
        return "ERROR";
    }else{
        let smaller = Math.min(firstValue,secondValue);
        let bigger = Math.max(firstValue,secondValue);
        for(smaller;smaller<=bigger;smaller++){
            sum +=smaller;
        }
        return sum;
    }
};
// Do not edit below this line
module.exports = sumAll;
