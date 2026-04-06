import fs from 'fs';

// 1. Update index.css
let cssContent = fs.readFileSync('src/index.css', 'utf8');
cssContent = cssContent.replace('gap: 80px;', 'gap: 40px;'); // Compress vertical spacing
fs.writeFileSync('src/index.css', cssContent, 'utf8');
console.log("Updated CSS gap.");

// 2. Update App.jsx
let appContent = fs.readFileSync('src/App.jsx', 'utf8');

// Add profession
if (appContent.includes("'ПОМОЩНИК РУКОВОДИТЕЛЯ'")) {
    appContent = appContent.replace(/'ПОМОЩНИК РУКОВОДИТЕЛЯ'/, "'ПОМОЩНИК РУКОВОДИТЕЛЯ', 'МЕНЕДЖЕР ПО СНАБЖЕНИЮ'");
    console.log("Added supply manager to professions.");
}

// Add corruption pain card
const newPain = `\n            { id: "ERR_07", title: "КОРРУПЦИЯ И ОТКАТЫ", desc: "Откатчики, махинации с закупками и тендерные сливы. Нейросеть взяток не берет.", icon: <PixelHumanError /> },`;
const regex = /(icon: <PixelHumanError \/> \},)(\s*)\]\.map/;

if (regex.test(appContent)) {
    appContent = appContent.replace(regex, `$1${newPain}$2].map`);
    console.log("Added corruption pain card.");
} else {
    // maybe there's no comma?
    const fallbackRegex = /(icon: <PixelHumanError \/> \})(\s*)\]\.map/;
    if (fallbackRegex.test(appContent)) {
         appContent = appContent.replace(fallbackRegex, `$1,${newPain}$2].map`);
         console.log("Added corruption pain card (fallback).");
    } else {
         console.log("Could not match pains array end.");
    }
}

fs.writeFileSync('src/App.jsx', appContent, 'utf8');
console.log("Updated App.jsx.");
