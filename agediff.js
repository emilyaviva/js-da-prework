var ancestry = JSON.parse(require('./ancestry.js'));

function average(arr) {
  function plus(a, b) {
    return a + b;
  }
  return arr.reduce(plus) / arr.length;
}

function age(p) {
  return p.died - p.born;
}

var byName = {};
ancestry.forEach(function(p) {
  byName[p.name] = p;
});

// get all people with known mothers

var hasMothers = ancestry.map(function(p) {
  if (p.mother) return p;
  else return null;
}).filter(function(p) {
  if (p) return p;
});
