var ancestry = require('ancestry.js');

function average(arr) {
  function plus(a, b) {
    return a + b;
  }
  return arr.reduce(plus) / arr.length;
}

function age(p) {
  return p.died - p.born;
}
function male(p) {
  return p.sex == 'm';
}
function female(p) {
  return p.sex == 'f';
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function hasKnownMother(p) {
  return p.mother;
};

function filter(arr, callback) {
  var called = [];
  for (var i = 0; i < array.length; i++) {
    if (callback(arr[i])) {
      called.push(arr[i]);
    }
  }
  return called;
}
