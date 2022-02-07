const palindromes = function (string) {
    const reg = /[\W_]/g;
    const smallString = string.toLowerCase().replace(reg,'');
    console.log(smallString);
    const newString = smallString.split('').reverse().join('');
    if(smallString == newString){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
palindromes('A car, a man, a maraca.');