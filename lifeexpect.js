function average(arr) {
  function plus(a, b) {
    return a + b;
  }
  return arr.reduce(plus) / arr.length;
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
