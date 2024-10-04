const sumAll = function(min, max) {
  if (!Number.isInteger(min)|| !Number.isInteger(max) ||
  min < 0 || max < 0) return 'ERROR';
  
  [max, min] = min > max ? [min, max] : [max, min]
  
  let sum = 0;
  for (;min <= max; min++) {
    sum += min;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
