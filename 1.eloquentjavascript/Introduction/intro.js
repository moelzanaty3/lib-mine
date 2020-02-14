/*
 * Created on 2/14/20, 5:53 PM
 * Copyright (c)   - @author: Mohammed Elzanaty
 */

console.log("Run code here in the context of Chapter 0");

/*1*/
let total = 0,
  count = 0;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total); // ->  55

/*2*/
function range(start, end) {
  if (start === end) return [start];
  return [start, ...range(start + 1, end)];
}

function sum(arr) {
  return arr.reduce(
    (accumulator, currentValue) => (accumulator += currentValue)
  );
}

console.log(sum(range(1, 10))); // -> 55

/*3-> Factorial*/
function factorial(n) {
  if (n === 1) return n;
  return factorial(n - 1) * n;
}

console.log(factorial(5)); // -> 120
