const mysql = require("mysql");

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

const sql = `UPDATE departments SET city = 'TEXAS'
             WHERE deptname = 'ACCOUNTING'`;

const sql2 = `DELETE FROM departments
              WHERE deptname = 'R&D'`;

conn.query(sql2, (err, result, fields) => {
  if (err) {
    console.log(err.message);
  }
  console.log(result.affectedRows);
});

conn.end((err) => {
  if (err) {
    console.log(err.message);
  }
});

// OUTPUT:
// 7.
// D:\MernTraining\NodeFiles\NodeHOL5>node hol5.7.js
// Successfully connected...
// 1

// 8.
// D:\MernTraining\NodeFiles\NodeHOL5>node hol5.7.js
// Successfully connected...
// 1
