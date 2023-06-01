const { readFile } = require("fs/promises");
const readline = require("node:readline/promises");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Which file to read? ")
  .then((filePath) => {
    return readFile(filePath, "utf-8").then((fileContent) => {
      console.log("Here is the content of the file:");
      console.log(fileContent);
      rl.close();
    });
  })
  .catch((error) => {
    console.log(error.message);
    rl.close();
  })
  .finally(() => {
    console.log("A user attempted to read file from the disk");
  });
