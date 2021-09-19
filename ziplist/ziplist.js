const _ = require('underscore');

const l1 = ['a', 'b', 'c'];
const l2 = [1, 2, 3];
function ziplist(list1, list2) {
  const result = [];
  let index1 = 0;
  let index2 = 0;
  for (let i = 0; i < list1.length * 2; i++) {
    if (i % 2 === 0) {
      result.push(list1[index1]);
      index1++;
    } else {
      result.push(list2[index2]);
      index2++;
    }
  }
  return result;
}
console.log(ziplist(l1, l2));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}
console.log(zipListTheSimpleWay(l1, l2));
