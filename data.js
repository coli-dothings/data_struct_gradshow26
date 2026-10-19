// Auto-generated JS file from Excel data
const excelData = {
  "Person": [
    {
      "name": "a",
      "sID": 4021256,
      "specialization": "a",
      "bio": "a",
      "website": "a"
    },
    {
      "name": "11",
      "sID": 11,
      "specialization": "a",
      "bio": "a",
      "website": "a",
      "showreel": "a"
    },
    {
      "name": "22",
      "sID": 22,
      "specialization": "a",
      "bio": "a",
      "website": "a"
    }
  ],
  "MP": [
    {
      "title": "mp",
      "representative": "Myself",
      "category": "Interactive",
      "tagline": "a",
      "description": "a",
      "credits": "a",
      "add_count": "2",
      "member_count": "3",
      "mem3": 22,
      "mem2": 11,
      "mem1": 4021256
    },
    {
      "title": "mp",
      "representative": "Mai"
    },
    {
      "title": "mp",
      "representative": "Mai"
    }
  ],
  "SP": [
    {
      "title": "sp",
      "representative": "Myself",
      "category": "Video",
      "tagline": "b",
      "description": "b",
      "add_count": "1",
      "member_count": "1",
      "mem1": 4021256
    },
    {
      "title": "spb",
      "representative": "Myself",
      "category": "UXUI",
      "tagline": "b",
      "description": "b",
      "add_count": "2",
      "member_count": "1",
      "mem1": 11
    },
    {
      "title": "a",
      "representative": "Myself",
      "category": "UXUI",
      "tagline": "a",
      "description": "a",
      "add_count": "3",
      "member_count": "1",
      "mem1": 22
    }
  ]
};

module.exports = excelData;


// Convert JS object to string and strip quotes around safe property keys
let jsContent = JSON.stringify(excelData, null, 2);

// Replace double-quoted property keys with unquoted keys (e.g., "myKey": -> myKey:)
jsContent = jsContent.replace(/"([^(^\"]*?)":/g, '\$1:');

const fs = require('node:fs');

try {
  fs.writeFileSync('output.js', `const myData = ${jsContent};`);
  // file written successfully
} catch (err) {
  console.error(err);
}

console.log("stripped done");