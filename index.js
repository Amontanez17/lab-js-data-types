/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

// tongueTwister =
//   s1 +
//   " " +
//   s2 +
//   " " +
//   s3 +
//   " " +
//   s4 +
//   " " +
//   s5 +
//   " " +
//   s3 +
//   " " +
//   s2 +
//   " " +
//   s1 +
//   " " +
//   s4;
tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`;
console.log(tongueTwister);

// Print out the concatenated string

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

let lastChar1 = part1.at(-1).toUpperCase();
let lastChar2 = part2.at(-1).toUpperCase();

// let capA = lastChar1.toUpperCase();
// let capT = lastChar2.toUpperCase();

part1Cap = part1.slice(0, 3);
part2Cap = part2.slice(0, 5);

const result = part1Cap + lastChar1 + part2Cap + lastChar2;

//str.replace(value1, value2);

// Print the cameLtaiL-formatted string
console.log(result);

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

let billTip = billTotal * 0.15;
let tipAmount = billTip;

// Print out the tipAmount
console.log(tipAmount);

/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

const num = Math.floor(Math.random() * 10) + 1;

// Print the generated random number
console.log(num);

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; // false

const expression2 = a || b; // true

const expression3 = !a && b; // false

const expression4 = !(a && b); // true

const expression5 = !a || !b; // true

const expression6 = !(a || b); // false

// const expression7 = a && a;

console.log(
  expression1,
  expression2,
  expression3,
  expression4,
  expression5,
  expression6
);
