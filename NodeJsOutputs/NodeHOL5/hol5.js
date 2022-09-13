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

const departments = `CREATE TABLE IF NOT EXISTS departments(
  deptID        int PRIMARY KEY AUTO_INCREMENT,
  deptName      varchar(15) NOT NULL,
  city          varchar(10) NOT NULL
)`;

conn.query(departments, (err, result, fields) => {
  if (err) {
    console.log(err.message);
  }
});

conn.end((err) => {
  if (err) {
    console.log(err.message);
  }
});

// 1. D:\MernTraining\NodeFiles\NodeHOL5>npm i mysql
// added 11 packages, and audited 12 packages in 7s
// found 0 vulnerabilities

// 4. mysql> use hr_db;
// Database changed

// mysql> desc todos;
// +-----------+--------------+------+-----+---------+----------------+
// | Field     | Type         | Null | Key | Default | Extra          |
// +-----------+--------------+------+-----+---------+----------------+
// | id        | int          | NO   | PRI | NULL    | auto_increment |
// | task      | varchar(100) | NO   |     | NULL    |                |
// | completed | tinyint(1)   | NO   |     | 0       |                |
// +-----------+--------------+------+-----+---------+----------------+
// 3 rows in set (0.00 sec)
