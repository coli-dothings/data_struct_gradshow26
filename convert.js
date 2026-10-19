const fs = require('fs');
const XLSX = require('xlsx');

// Read the Excel 
const workbook = XLSX.readFile('test_excel.xlsx'); // Replace with your file name

const allSheetsData = {};

// Loop through every page in the excel
workbook.SheetNames.forEach((sheetName) => {
    const worksheet = workbook.Sheets[sheetName];
    // Convert sheet rows into an array of JavaScript objects
    allSheetsData[sheetName] = XLSX.utils.sheet_to_json(worksheet);
});


// Make sure the JS items inside array are NOT double qouted
// Convert JS object to string and strip quotes around safe property keys
let jsFormatContent = JSON.stringify(allSheetsData, null, 2);

// Replace double-quoted property keys with unquoted keys (e.g., "myKey": -> myKey:)
jsFormatContent = jsFormatContent.replace(/"([^(^\"]*?)":/g, '\$1:');

// Write to a JS file
try {
  fs.writeFileSync('data_2.js', `const myData = ${jsFormatContent};`);
  // file written successfully
} catch (err) {
  console.error(err);
}

console.log("Successfully converted multi-page Excel sheet to JS");



// Next step is to try to convert the data to have Name (or ID for test) as the key OUTSIDE