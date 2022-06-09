const fs = require("fs");

let dn = {
  name: "Darwin Nunez",
  age: 22,
  position: "CF",
  nationality: "Uruguay",
  club: "Benfica",
};

let eh = {
  name: "Erling Haaland",
  age: 22,
  position: "CF",
  nationality: "Norway",
  club: "Manchester City",
};

const user = [dn, eh];

const data = JSON.stringify(user);

fs.writeFile("./users.json", data, (err) => {
  if (err) {
    console.log(`Shit happens : ${err}`);
  }
  console.log("Successfully");
});
