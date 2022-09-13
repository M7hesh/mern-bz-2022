const express = require("express");
const path = require("path");

const app = express();
// app.use(express.static(__dirname + "./public"));
app.get("/", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "./future_value/index.html"));
  app.use("/index.html", express.static(__dirname + "./public"));
  res.status(200);
});

app.get("/a", (req, res) => {
  res.send(
    "<h1>Hello from Express</h1><h3>Fast, unopinionated, minimalist web framework</h3>"
  );
  res.status(200);
});

app.get("/api", (req, res) => {
  res.send(
    "<h1>APIs</h1><p>With a myriad of HTTP utility methods and middleware at your disposal creating a robust API is quick and easy.</p>"
  );
  res.status(200);
});

app.get("/performance", (req, res) => {
  res.send(
    "<h1>Performance</h1><p>Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.</p>"
  );
  res.status(200);
});

app.get("/frameworks", (req, res) => {
  res.send(`<ul>
  <li>Feathers</li>
  <li>ItemsAPI</li>
  <li>KeystoneJS</li>
  <li>Poet</li>
  <li>Kraken</li>
  <li>LoopBack</li>
  <li>Sails</li>
  <li>Hydra-Express</li>
  <li>Blueprint</li>
  <li>Locomotive</li>
  <li>graphql-yoga</li>
  <li>Express Gateway</li>
  <li>Dinoloop</li>
  <li>NestJs</li>
  <li>Expressive Tea</li>
  </ul>`);
});

app.all("*", (req, res) => {
  res.send("<h1>Page not found</h1>");
  res.status(404);
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
