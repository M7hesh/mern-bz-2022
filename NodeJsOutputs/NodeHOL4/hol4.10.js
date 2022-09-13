const http = require("https");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter City to view weather report: ", (input) => {
  const options = {
    method: "GET",
    hostname: "weatherapi-com.p.rapidapi.com",
    port: null,
    path: `/current.json?q=${input.trim()}`,
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
  rl.close();
});

// OUTPUT:
// PS D:\MernTraining\NodeFiles\NodeHOL4> node hol4.10.js
// Enter City to view weather report: pune
// Location: Pune, Maharashtra
// Current weather condition: Overcast
// Temperature (c): 23
