const fs = require("fs");
const path = require("path");

const FILE_TYPE = {
  C: "c",
  CPP: "cpp",
  JAVA: "java",
  PYTHON: "python",
  JAVASCRIPT: "javascript",
};

// Base Url from which assets will be loaded
const baseUrl = "../assets/";

// Function to read a file from path; prepends the baseUrl to the filePath. Returns a promise
const readFile = (filePath) => {
  const absolutePath = path.join(__dirname, baseUrl, filePath);

  // Reading file and returning string representation of file; if an error occurs, it is thrown to caller
  return new Promise((resolve, reject) => {
    fs.readFile(absolutePath, (error, fileData) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(fileData.toString());
    });
  });
};

module.exports = {
  readFile,
  FILE_TYPE,
};

readFile("logo.txt").then((file) => {
  console.log(file);
});
