// let today = new Date();
// console.log(today.toString());
// console.log(today.toISOString());
// console.log(today.toUTCString());
// console.log(today.toTimeString());
// console.log(today.toJSON());

const greeting = (message) => {
  const withName = (name) => {
    console.log(`${message} ${name}`);
  };

  return withName;
};

const sayHi = greeting("Hi");
const sayHello = greeting("Hello");

sayHi("COOOK");