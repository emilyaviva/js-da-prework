var arrays = [[1, 2, 3], [4, 5], [6]];

var flattenedArray = arrays.reduce(function(a, b) {
  return a.concat(b);
})

console.log('Starting array of arrays:', arrays);
console.log('Flattened array:', flattenedArray);
