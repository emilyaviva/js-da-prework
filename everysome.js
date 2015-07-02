function every(arr, callback) {
  var result = true;
  arr.forEach(function(x) {
    if (!callback(x)) {
      result = false;
    }
  });
  return result;
};

function some(arr, callback) {
  var result = false;
  arr.forEach(function(x) {
    if (callback(x)) {
      result = true;
    }
  });
  return result;
}

// test code

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
