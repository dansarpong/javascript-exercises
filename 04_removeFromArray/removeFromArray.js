const removeFromArray = function(array, ...itemsToRemove) {
  let finalArray = array.filter((arrayElement) => {
    for (const item of itemsToRemove) {
      if (item === arrayElement) return false;
    }
    return true;
  });

  return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
