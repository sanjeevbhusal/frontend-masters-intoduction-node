import { readFile, writeFile } from "fs/promises";

// Template file details
let fileName = "template.html";
let dirPath = import.meta.url;
let filePath = new URL(fileName, dirPath);
let fileContents = await readFile(filePath, "utf-8");

const data = {
  titleName: "File System Practise",
};

for (let [key, value] of Object.entries(data)) {
  fileContents = fileContents.replace(`{${key}}`, value);
}

// New file details
let newFileName = "title.html";
let newFilePath = new URL(newFileName, dirPath);
writeFile(newFilePath, fileContents);
