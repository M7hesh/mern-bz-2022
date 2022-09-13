const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    fs.createReadStream("./home4.2.html").pipe(res);
  } else if (req.url === "/about") {
    fs.createReadStream("./about4.2.html").pipe(res);
  } else if (req.url === "/contact") {
    fs.createReadStream("./contact4.2.html").pipe(res);
  } else {
    res.write("<h1>Page not found!<h1>");
    res.statusCode = 404;
  }
});

server.listen(3001, () => {
  console.log("Server started at port 3001......");
});
