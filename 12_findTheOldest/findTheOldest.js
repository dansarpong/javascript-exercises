const findTheOldest = function(people) {
  return people.reduce(((oldest, person) => {
    let age = (person.yearOfDeath) ?
      person.yearOfDeath - person.yearOfBirth :
      new Date().getFullYear() - person.yearOfBirth;
    
    if (age > oldest.age) {
      oldest.person = person;
      oldest.age = age;
    }

    return oldest;
  }), {
    person: null,
    age: 0
  }).person;
};

// Do not edit below this line
module.exports = findTheOldest;
