const mysql = require("mysql");
var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mahesh@7",
  database: "hr_db",
});

conn.connect((err) => {
  if (err) {
    console.log("Connection Error...");
    console.error(err);
  } else {
    console.log("Successfully connected...");
  }
});
// NOTE: Outputs pasted below
//6.[a]
// const sql = `SELECT * FROM departments`;
// conn.query(sql, (err, result, fields) => {
//   if (err) {
//     console.log(err.message);
//   }
//   console.log(result);
// });

//6.[b]
// const sql2 = `SELECT * FROM departments
//              WHERE CITY = ?`;
// const city = ["Pune"];

// conn.query(sql2, city, (err, result, fields) => {
//   if (err) {
//     console.log(err.message);
//   }
//   console.log(result);
// });

//6.[c]
let deptName;
let endFlag = false;
rl.question("Enter department name: ", (answer) => {
  deptName = [answer];
  const sql = `SELECT * FROM departments 
             WHERE deptName = ?`;
  conn.query(sql, deptName, (err, result, fields) => {
    if (err) {
      console.log(err.message);
    }
    console.log(result);
  });
  endFlag = true;
  rl.close();
});

endFlag &&
  conn.end((err) => {
    if (err) {
      console.log(err.message);
    }
  });

// OUTPUT:
//6.[a]
// D:\MernTraining\NodeFiles\NodeHOL5>node hol5.6.js
// Successfully connected...
// [
//   RowDataPacket { deptID: 1, deptName: 'ACCOUNTING', city: 'NEW YORK' },
//   RowDataPacket { deptID: 2, deptName: 'RESEARCH', city: 'DALLAS' },
//   RowDataPacket { deptID: 3, deptName: 'SALES', city: 'CHICAGO' },
//   RowDataPacket { deptID: 6, deptName: 'OPERATIONS', city: 'BOSTON' },
//   RowDataPacket { deptID: 7, deptName: 'R&D', city: 'PUNE' }
// ]

//6.[b]
// D:\MernTraining\NodeFiles\NodeHOL5>node hol5.6.js
// Successfully connected...
// [ RowDataPacket { deptID: 7, deptName: 'R&D', city: 'PUNE' } ]

//6.[c]
// D:\MernTraining\NodeFiles\NodeHOL5>node hol5.6.js
// Enter department name: Successfully connected...
// sales
// [ RowDataPacket { deptID: 3, deptName: 'SALES', city: 'CHICAGO' } ]
