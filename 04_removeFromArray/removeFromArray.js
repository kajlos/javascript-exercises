const removeFromArray = function(array, itemToRemove, itemToRemove2, itemToRemove3, itemtoRemove4) {



    let pos = array.indexOf(itemToRemove);
    array.splice(pos,1);
    return array;
};
removeFromArray([1,2,3,4],3)
// Do not edit below this line
module.exports = removeFromArray;
