const http = require("https");

const options = {
  method: "GET",
  hostname: "cricbuzz-cricket.p.rapidapi.com",
  port: null,
  path: "/matches/v1/upcoming",
  headers: {
    "X-RapidAPI-Key": "2d6373f9bcmsh31ec8df4174a285p1316b5jsn3047557e4f6d",
    "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
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
    const internationalTournamentsArray = parsedBody.typeMatches.find(
      (type) => type.matchType === "International"
    ).seriesMatches;
    internationalTournamentsArray.forEach((tournament) => {
      const match1Info = tournament.seriesAdWrapper?.matches[0].matchInfo;
      // Due to extensive data we will consider only 1st match of in every series
      console.log(match1Info?.seriesName);
      console.log(match1Info?.seriesStartDt);
      console.log(match1Info?.venueInfo.ground);
      console.log("-------------------------------------------");
    });
  });
});

req.end();

// OUTPUT:
// PS D:\MernTraining\NodeFiles\NodeHOL4> node hol4.7.js
// ICC Cricket World Cup League Two 2019-23
// 1565740800000
// Amini Park
// -------------------------------------------
// Africa Cricket Association Cup 2022
// 1663200000000
// Willowmoore Park
// -------------------------------------------
// England tour of Pakistan, 2022
// 1663632000000
// National Stadium
// -------------------------------------------
// ICC Mens T20 World Cup East Asia Pacific Qualifier A 2022
// 1662595200000
// Independence Park
// -------------------------------------------
// Australia tour of India, 2022
// 1663632000000
// Punjab Cricket Association IS Bindra Stadium
// -------------------------------------------
