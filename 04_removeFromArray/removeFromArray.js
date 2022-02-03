const removeFromArray = function(array, ...args) {
    let newArray =[];
    array.forEach(function(element){
        if(!args.includes(element)){
            newArray.push(element);
        }
    })
    console.log(newArray);
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

removeFromArray([1,2,3,4],4,7,8);