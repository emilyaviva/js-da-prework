var ancestry = JSON.parse(require('./ancestry.js'));

function average(arr) {
  function plus(a, b) {
    return a + b;
  }
  return arr.reduce(plus) / arr.length;
}

var everyCentury = {};
ancestry.forEach(function(p) {
  var theirCentury = Math.ceil(p.died / 100);
  if (!(theirCentury in everyCentury)) {
    everyCentury[theirCentury] = [];
  }
  everyCentury[theirCentury].push(p.died - p.born);
});

for (century in everyCentury) {
  console.log(century + ':', average(everyCentury[century]));
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94

function groupBy(arr, callback) {
  return arr.map(callback).reduce(function(grp, x, i) {
    if (!(x in grp)) grp[x] = [arr[i]];
    else grp[x].push(arr[i]);
    return grp;
  }, {});
};

// bonus: abstract grouping into its own operation

var groups = groupBy(ancestry, function(p) {
  return Math.ceil(p.died / 100);
});

for (century in groups) {
  console.log(century + ':', average(groups[century].map(function(p) {
    return p.died - p.born;
  })));
}
