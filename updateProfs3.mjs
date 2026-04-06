import fs from 'fs';
let content = fs.readFileSync('src/App.jsx', 'utf8');

// Remove transcriber
content = content.replace(/,?\s*'ТРАНСКРИБАТОР',?/, '');
console.log("Removed ТРАНСКРИБАТОР successfully.");

// Rename junior analyst
if (content.includes('МЛАДШИЙ АНАЛИТИК')) {
    content = content.replace('МЛАДШИЙ АНАЛИТИК', 'АНАЛИТИК');
    console.log("Renamed МЛАДШИЙ АНАЛИТИК to АНАЛИТИК.");
}

fs.writeFileSync('src/App.jsx', content, 'utf8');
