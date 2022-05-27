// Ternary function
// const age = 10;

// let message;

// message = age>=16 ? "You can drive" : "You cannot drive";

// console.log(message);

// For loop
// for (let i = 0; i < 25; i++) {
//   let txt = "";
//   for (let k = 0; k < 3 * (25 - i); k++) {
//     txt += " ";
//   }
//   for (let j = 0; j < i; j++) {
//     txt += "*";
//   }
//   console.log(txt);
// }

for (let i = 1; i <= 100; i++) {
  let txt = i;
  if (i % 3 == 0) {
    txt = i % 5 == 0 ? "FizzBuzz" : "Fizz";
  } else if (i % 5 == 0) {
    txt = "Buzz";
  }
  console.log(txt);
}
