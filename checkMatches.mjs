import fs from 'fs';

const content = fs.readFileSync('src/App.jsx', 'utf8');

const regex = /FATAL_EXCEPTION/g;
let match;
const matches = [];
while ((match = regex.exec(content)) !== null) {
  matches.push(match.index);
}
console.log("Found matches at:", matches);
