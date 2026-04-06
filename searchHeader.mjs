import fs from 'fs';

const content = fs.readFileSync('src/App.jsx', 'utf8');

const regex = /<div className="terminal-header"[\s\S]*?<\/div>[\s\S]*?<div className="terminal-body"/g;
let match;
while ((match = regex.exec(content)) !== null) {
  console.log("MATCH:");
  console.log(match[0]);
  console.log("---------------");
}
