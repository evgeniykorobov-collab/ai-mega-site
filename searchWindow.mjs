import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');

// Find where pains are mapped
const regex = /pains\.map\(([\s\S]*?)<\/motion\.div>/g;
let match;
while ((match = regex.exec(content)) !== null) {
  console.log("MATCH:");
  console.log(match[0]);
  console.log("---------------");
}

