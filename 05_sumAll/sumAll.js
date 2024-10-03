const sumAll = function(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' ||
    a < 0 || b < 0 ||
    a % 1 !== 0 || b % 1 !== 0
  ) {
    return 'ERROR';
  }
  let biggest = a>b ? a : b;
  let smallest = biggest===a ? b : a;
  let sum = 0;

  for (;smallest <= biggest; smallest++) {
    sum += smallest;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
