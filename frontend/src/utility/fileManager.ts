import fs from 'fs'
import path from 'path'

// Base Url from which assets will be loaded
const baseUrl : string = '../assets/';

// Function to read a file from path; prepends the baseUrl to the filePath. Returns a promise
const readFile = (filePath : string) => {
  const absolutePath = path.join(__dirname, baseUrl, filePath);

  // Reading file and returning string representation of file; if an error occurs, it is thrown to caller
  return new Promise((resolve, reject) => {
    fs.readFile(absolutePath, (error : any, fileData : any) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(fileData.toString());
    });
  });
};

export {
  readFile
}