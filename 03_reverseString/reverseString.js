const reverseString = function(word) {
  let result = '';
  while (word) {
    result += word.slice(-1);
    word = word.slice(0,-1);
  }

  return result;
};

// Do not edit below this line
module.exports = reverseString;
