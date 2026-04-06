import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');

if (content.includes("'ЛИДОГЕНЕРАТОР'")) {
    content = content.replace("'ЛИДОГЕНЕРАТОР'", "'ДИРЕКТОЛОГ'");
    fs.writeFileSync('src/App.jsx', content, 'utf8');
    console.log("Replaced successfully.");
} else {
    console.log("Not found.");
}
