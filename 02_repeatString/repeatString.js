const repeatString = function(word, times) {

  let result = '';
  if (times < 0) return 'ERROR';

  while (times-- >= 1) {
    result += word;
  }

  return result;
};

// Do not edit below this line
module.exports = repeatString;
