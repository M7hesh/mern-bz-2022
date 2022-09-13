const http = require("https");

const options = {
  method: "GET",
  hostname: "weatherapi-com.p.rapidapi.com",
  port: null,
  path: "/current.json?q=Pune",
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
    console.log(
      `Location: ${parsedBody.location.name}, ${parsedBody.location.region}`
    );
    console.log(
      `Current weather condition: ${parsedBody.current.condition.text}`
    );
    console.log(`Temperature (c): ${parsedBody.current.temp_c}`);
  });
});

req.end();

// OUTPUT:
// PS D:\MernTraining\NodeFiles\NodeHOL4> node hol4.6.js
// Location: Pune, Maharashtra
// Current weather condition: Overcast
// Temperature (c): 23.4
