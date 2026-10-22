// Run in terminal: node convert.js
const fs = require("fs");
const XLSX = require("xlsx");

// Read the Excel 
const workbook = XLSX.readFile("test_excel_2.xlsx"); 

const allSheetsData = {};

// Loop through every page in the excel
workbook.SheetNames.forEach((sheetName) => {
    const worksheet = workbook.Sheets[sheetName];
    // Convert sheet rows into an array of JavaScript objects
    allSheetsData[sheetName] = XLSX.utils.sheet_to_json(worksheet);
});
// Result is double quoted on both key & data: see data.js

// Convert JS object to string and strip quotes around safe property keys
// 2 indent space ensure the data displayed is properly indented per line down (=tab). No indent makes a straight line
let jsFormatContent = JSON.stringify(allSheetsData, null, 2);

// Replace double-quoted property keys with unquoted keys ("myKey": "data" -> myKey: "data")
jsFormatContent = jsFormatContent.replace(/"([^(^\"]*?)":/g, "\$1:");

// Write to a JS file
try {
  fs.writeFileSync("data_3.js", `const myData = ${jsFormatContent};`);
  // catch error ensure Node does not BLOW UP the computer
} catch (err) {
  console.error(err);
}

console.log("Successfully converted multi-page Excel sheet to JS");
