var ancestry = JSON.parse(require('./ancestry.js'));

function average(arr) {
  function plus(a, b) {
    return a + b;
  }
  return arr.reduce(plus) / arr.length;
}

var byName = {};
ancestry.forEach(function(p) {
  byName[p.name] = p;
});

function hasKnownMother(p) {
  return p.mother in byName;
}

function ageDiff(p) {
  return p.born - byName[p.mother].born;
}

console.log(average(ancestry.filter(hasKnownMother).map(ageDiff)));
