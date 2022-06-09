// let arr = [32, 93, 9, 2, 3];

// let res = arr.filter((num) => num % 2 === 0);

// let sum = arr.reduce((prev, curr, index) => {
//   console.log(`${index}. ${prev} - ${curr}`);
//   return prev + curr;
// });

// console.log(res);

// console.log(sum);

// Read file

const fs = require("fs");

fs.readFile(
  "./dummy.json",
  {
    encoding: "utf-8",
  },
  (err, data) => {
    if (err) {
      return console.log(`Shit happens: ${err}`);
    }

    console.log("Content :");
    console.log(data);

    const arrayOfObject = JSON.parse(data);

    console.log("array of objects :");
    console.log(arrayOfObject);
  }
);
