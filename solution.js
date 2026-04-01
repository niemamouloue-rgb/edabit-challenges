// Edabit Challenges Solutions

// 1. Return the First Element in an Array
function getFirstValue(arr) {
  return arr[0];
}

// 2. How Much is True?
function countTrue(arr) {
  return arr.filter(value => value === true).length;
}

// 3. Return the Next Number from the Integer Passed
function addition(num) {
  return num + 1;
}

// 4. Convert Hours into Seconds
function howManySeconds(hours) {
  return hours * 3600;
}

// 5. Convert a Number to Base-2
function binary(decimal) {
  return decimal.toString(2);
}

// 6. Add up the Numbers from a Single Number
function addUp(num) {
  return num * (num + 1) / 2;
}

// 7. Largest Swap
function largestSwap(num) {
  let tens = Math.floor(num / 10);
  let ones = num % 10;
  return tens >= ones;
}

// 8. Check if One Array can be Nested in Another
function canNest(arr1, arr2) {
  return Math.min(...arr1) > Math.min(...arr2) &&
         Math.max(...arr1) < Math.max(...arr2);
}

// 9. Matchstick Houses
function matchHouses(step) {
  return step === 0 ? 0 : 5 * step + 1;
}

// 10. Bitwise Operations
function bitwiseAND(n1, n2) {
  return n1 & n2;
}

function bitwiseOR(n1, n2) {
  return n1 | n2;
}

function bitwiseXOR(n1, n2) {
  return n1 ^ n2;
}

// 11. A Redundant Function
function redundant(str) {
  return function () {
    return str;
  };
}

// 12. Get Notes Distribution
function getNotesDistribution(students) {
  return students
    .flatMap(student => student.notes)
    .filter(note => note >= 1 && note <= 5)
    .reduce((acc, note) => {
      acc[note] = (acc[note] || 0) + 1;
      return acc;
    }, {});
}

// 13. Promises III
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello Edabit");
  }, 1000);
});
