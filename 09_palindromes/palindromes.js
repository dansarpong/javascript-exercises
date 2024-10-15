const palindromes = function (str) {
  let cleanedString = str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g, '').toLowerCase();
  let reversedString = cleanedString.split("").reverse().join("");
  return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
