const http = require("https");

const options = {
  method: "GET",
  hostname: "weatherapi-com.p.rapidapi.com",
  port: null,
  path: "/astronomy.json?q=Pune",
  headers: {
    "X-RapidAPI-Key": "2d6373f9bcmsh31ec8df4174a285p1316b5jsn3047557e4f6d",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    useQueryString: true,
  },
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    const parsedBody = JSON.parse(body.toString());
    console.log("Sunrise: ", parsedBody.astronomy.astro.sunrise);
    console.log("Sunset: ", parsedBody.astronomy.astro.sunset);
    console.log("Moonrise: ", parsedBody.astronomy.astro.moonrise);
    console.log("Moonset: ", parsedBody.astronomy.astro.moonset);
  });
});

req.end();
// OUTPUT:
// PS D:\MernTraining\NodeFiles\NodeHOL4> node hol4.8.js
// Sunrise:  06:22 AM
// Sunset:  06:39 PM
// Moonrise:  08:50 PM
// Moonset:  08:53 AM
