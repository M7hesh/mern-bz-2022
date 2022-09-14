const fs = require("fs");
const path = require("path");
const events = require("events");
const { pipeline } = require("stream");
const zlib = require("zlib");

// 1.a.
// const readFileSync = fs.readFileSync("./sample.txt", "utf-8");
// console.log(readFileSync);

// 1.b.
// fs.readFile("./sample.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// 2.a.
// const content = "File content";
// fs.writeFileSync("./sample.txt", content);

// 2.b.
// fs.writeFile("./sample.txt", content, (err) => {
//   if (err) console.error(err);
// });

// const content1 = "File content 3";
// fs.appendFile("./sample.txt", content1, (err) => {
//   if (err) console.error(err);
// });

// 3.
// const fileName = "D:Mern trainingNodeFilesNodeNotessample.txt";
// dname = path.dirname(fileName);
// bname = path.basename(fileName);
// ext = path.extname(fileName);
// console.log(dname);
// console.log(bname);
// console.log(ext);

// 5.
// os.platform()
// os.hostname()
// os.release()
// os.totalmem()
// os.freemem()
// os.cpus()

// 6.
// ee = new events.EventEmitter();

// ee.on("Step1", () => console.log("Step 1: Start a Car in Neutral"));
// ee.on("Step2", () => console.log("Step 2: Shift into First Gear"));
// ee.on("Step3", () => console.log("Step 3: Get the Car in Motion"));
// ee.on("Step4", () => console.log("Step 4: Upshift into Higher Gears"));
// ee.on("Step5", () => console.log("Step 5: Downshift to Lower Gears"));
// ee.on("Step6", () => console.log("Step 6: Stop a Manual Car"));

// ee.emit("Step1");
// ee.emit("Step2");
// ee.emit("Step3");
// ee.emit("Step4");
// ee.emit("Step5");
// ee.emit("Step6");

// 7.
// var data = '';
// const readerStream = fs.createReadStream("./sample.txt");
// readerStream.setEncoding("utf-8");
// readerStream.on("data", (chunk) => {
//   data += chunk;
// });
// readerStream.on("end", () => {
//   console.log(data);
// });
// readerStream.on("error", (err) => {
//   console.error(err.stack);
// });
// console.log("Program ended");

// 8.
// const readableStream = fs.createReadStream("./sample.txt");
// var data = "";
// var chunk;
// var vowel = 0;
// var consonant = 0;
// readableStream.setEncoding("utf-8");
// readableStream.on("readable", () => {
//   while ((chunk = readableStream.read(1)) != null) {
//     data += chunk;
//     if (["a", "e", "i", "o", "u"].includes(chunk.toLowerCase().trim())) {
//       vowel++;
//     } else {
//       consonant++;
//     }
//   }
// });
// readableStream.on("end", () => {
//   console.log(data);
//   console.log(`Vowels: ${vowel}`);
//   console.log(`Consonants: ${consonant}`);
//   console.log(`Vowel percent: ${(vowel / data.length) * 100}%`);
//   console.log(`Consonant percent: ${(consonant / data.length) * 100}%`);
// });

// 9.
// const readable = fs.createReadStream("./sample.txt");
// readable.setEncoding("utf-8");
// const copy1 = fs.createWriteStream("sampleCopy1.txt");
// const copy2 = fs.createWriteStream("sampleCopy2.txt");
// readable.pipe(copy1);
// readable.pipe(copy2);
// console.log("Program Ended");

// 11.
// const crypto = require("crypto");
// const hash = crypto.createHash("sha512");
// const data = hash.update("./sample.txt", "utf-8");
// const gen_hash = data.digest("hex");
// console.log("hash : " + gen_hash);

// OUTPUT: D:\MernTraining\NodeFiles\NodeHOL3>node hol3.js
// hash : c053780bebd11086a4428d7491b0ad052387886a7bffa126d9be7622ceae1317b480fc4137810ada1b388227fb08aac30027596f1a7847e1cf1687c2042b2053

// 12.
// const {pipeline} = require('stream')
// const zlib = require('zlib')
// pipeline(
//   fs.createReadStream("./sample.txt"),
//   zlib.createGzip(),
//   fs.createWriteStream("./sample.gz"),
//   (err) => {
//     if (err) {
//       console.error("Pipeline failed", err);
//     } else {
//       console.timeLog("Pipeline successful");
//     }
//   }
// );
