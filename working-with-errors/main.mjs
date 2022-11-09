import { readFile} from "fs/promises";


// Template file details
let fileName = "template.html";
let dirPath = import.meta.url + "sjals/";
let filePath = new URL(fileName, dirPath);

// process.on("uncaughtException", (err) => {
//   console.log(err)
// })

let fileContents = readFile(filePath, "utf-8").catch(err => console.log("error was thrown"))

console.log("executing after error thrown")

// const data = {
//   titleName: "File System Practise",
// };

// for (let [key, value] of Object.entries(data)) {
//   fileContents = fileContents.replace(`{${key}}`, value);
// }

// // New file details
// let newFileName = "title.html";
// let newFilePath = new URL(newFileName, dirPath);
// writeFile(newFilePath, fileContents);
