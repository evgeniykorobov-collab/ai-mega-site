import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');

const regex = /,?\s*'ТРАНСКРИБАТОР',?/;
if (regex.test(content)) {
    content = content.replace(regex, '');
    fs.writeFileSync('src/App.jsx', content, 'utf8');
    console.log("Removed ТРАНСКРИБАТОР successfully.");
} else {
    console.log("ТРАНСКРИБАТОР not found.");
}
