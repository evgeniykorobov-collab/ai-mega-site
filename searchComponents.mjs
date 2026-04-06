import fs from 'fs';

const content = fs.readFileSync('src/App.jsx', 'utf8');

const regex = /FATAL_EXCEPTION/g;
let match;
while ((match = regex.exec(content)) !== null) {
  const start = Math.max(0, match.index - 200);
  const end = Math.min(content.length, match.index + 400);
  console.log("MATCH:");
  console.log(content.substring(start, end));
  console.log("-------------------");
}
