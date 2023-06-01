// is reading files from the disk async task or not?

const fs = require("fs");

console.log("reading file");

fs.readFileSync("./file.txt", "utf8", (err, data) => {
  if (err) {
    return console.log("error reading file");
  }
  console.log(data);
  console.log("finished reading file from the disk");
});
// ^^ which is sync - it will block the main thread until you finish the above task

console.log("after readFile");

console.log("program ended");

/* output:
1. reading file
2. after readFile
3. progamEnded
4. data
5. finished reading file from the disk
*/
