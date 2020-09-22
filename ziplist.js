const test1 = [1, 2, 3];
const test2 = ['a', 'b', 'c'];

function zipList(array1, array2) {
  if (array1.length === array2.length) {
    const combined = [];
    for (let i = 0; i < array1.length; i++) {
      combined.push(array1[i], array2[i]);
    }
    return combined;
  }
  return 0;
}

function zipListTheSimpleWay(array1, array2) {
  const list1 = _.zip(array1, array2);
  const list2 = _.flatten(list1);
  return list2;
}

console.log(zipList(test1, test2));
console.log(zipListTheSimpleWay(test1, test2));
