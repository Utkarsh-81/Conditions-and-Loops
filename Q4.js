// Q4. Generate numbers between any 2 given numbers.

// Ex:
// const num1 = 10;
// const num2 = 25;

// Output: 11, 12, 13, …., 25

const num1 = 10;
const num2 = 25;
let result = [];

for (let i = num1 + 1; i <= num2; i++) {
  result.push(i);
}

console.log(result.join(", "));
