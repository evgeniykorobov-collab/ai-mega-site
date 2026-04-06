import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');

content = content.replace(/'СМЕТЧИК'\s*'СЦЕНАРИСТ'/, "'СМЕТЧИК', 'СЦЕНАРИСТ'");
content = content.replace(/'СМЕТЧИК'\n\s*'СЦЕНАРИСТ'/, "'СМЕТЧИК',\n    'СЦЕНАРИСТ'");

fs.writeFileSync('src/App.jsx', content, 'utf8');
console.log("Fixed comma.");
