const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const empDetails = (first, last, gender, age) => {
  console.log(`Employee details:
  Full name: ${first} ${last}
  Gender: ${gender}
  Age: ${age}
  Age next year: ${parseInt(age) + 1}`);
};

rl.question("Enter First name: ", (first) => {
  rl.question("Enter Last name: ", (last) => {
    rl.question("Enter gender: ", (gender) => {
      rl.question("Enter age: ", (age) => {
        empDetails(first, last, gender, age);
        rl.close();
      });
    });
  });
});

// OUTPUT:
// PS D:\MernTraining\NodeFiles\NodeHOL4> node hol4.9.js
// Enter First name: Mahesh
// Enter Last name: Mote
// Enter gender: Male
// Enter age: 24
// Employee details:
//   Full name: Mahesh Mote
//   Gender: Male
//   Age: 24
//   Age next year: 25
