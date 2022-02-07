const findTheOldest = function(people) {
    const oldest = people.sort(function(a,b){
        const currentYear = new Date().getFullYear();
        if(a.yearOfDeath == null) a.yearOfDeath = currentYear;
        if(b.yearOfDeath == null) b.yearOfDeath = currentYear;
        let aAge = a.yearOfDeath - a.yearOfBirth;
        let bAge = b.yearOfDeath - b.yearOfBirth;
        if(aAge < bAge) return 1;
        else return -1;
    });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
