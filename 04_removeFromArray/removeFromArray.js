const removeFromArray = function(array, ...itemsToRemove) {
  return array.filter((element) => !itemsToRemove.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
