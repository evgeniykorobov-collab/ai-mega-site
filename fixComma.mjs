import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');

// Fix missing comma after removing transverser
if (content.includes("'СМЕТЧИК' 'СЦЕНАРИСТ'")) {
    content = content.replace(/'СМЕТЧИК'\s*'СЦЕНАРИСТ'/, "'СМЕТЧИК', 'СЦЕНАРИСТ'");
    fs.writeFileSync('src/App.jsx', content, 'utf8');
    console.log("Fixed missing comma between СМЕТЧИК and СЦЕНАРИСТ.");
} else if (content.includes("'СМЕТЧИК'  'СЦЕНАРИСТ'")) {
    content = content.replace(/'СМЕТЧИК'\s*'СЦЕНАРИСТ'/, "'СМЕТЧИК', 'СЦЕНАРИСТ'");
    fs.writeFileSync('src/App.jsx', content, 'utf8');
    console.log("Fixed missing comma between СМЕТЧИК and СЦЕНАРИСТ (double space).");
} else {
    // maybe there's a different missing comma. Just run a generalized regex for string literal missing comma inside array.
    // e.g. /('[^']+')\s+('[^']+']/
    const missingComma = /('[^']+')\s+('[^']+']/g;
    // but easier to just use generic approach for the professions array
    const profMatch = content.match(/const professions = \[([\s\S]*?)\];/);
    if (profMatch) {
       let arrContent = profMatch[1];
       // fix any place where two strings are separated only by whitespace
       arrContent = arrContent.replace(/'\s+'/g, "', '");
       content = content.replace(/const professions = \[\s*[\s\S]*?\s*\];/, \`const professions = [\${arrContent}];\`);
       fs.writeFileSync('src/App.jsx', content, 'utf8');
       console.log("Fixed array commas generically.");
    } else {
       console.log("Could not find the array.");
    }
}
