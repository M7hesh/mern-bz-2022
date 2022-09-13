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

const sql = `INSERT INTO departments(deptName, city) VALUES
              ('ACCOUNTING', 'NEW YORK'),
              ('RESEARCH', 'DALLAS'),
              ('SALES', 'CHICAGO'),
              ('OPERATIONS', 'BOSTON'),
              ('R&D', 'PUNE');`;

const sql2 = `INSERT INTO departments(deptName, city)
              VALUES(?,?)`;
const department = ["OPERATIONS", "BOSTON"];
const department2 = ["R&D", "PUNE"];

conn.query(sql2, department2, (err, result, fields) => {
  if (err) {
    console.log(err.message);
  }
});

conn.end((err) => {
  if (err) {
    console.log(err.message);
  }
});
