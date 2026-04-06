import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');
const searchStr = "Соцпакет, больничные, декрет.";
const idx = content.indexOf(searchStr);

if (idx !== -1) {
  const lineStart = content.lastIndexOf('\\n', idx);
  const lineEnd = content.indexOf('\\n', idx);
  console.log("LINE:", content.substring(lineStart, lineEnd));
} else {
  console.log("Not found based on exact string search. Trying regex.");
  const lines = content.split('\\n');
  lines.forEach(line => {
    if (line.includes('Соцпакет')) {
      console.log("Found:", line.trim());
    }
  });
}
