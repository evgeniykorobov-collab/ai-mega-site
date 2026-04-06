import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');

if (content.includes("'QA-ТЕСТИРОВЩИК'")) {
    content = content.replace("'QA-ТЕСТИРОВЩИК'", "'СМЕТЧИК'");
    fs.writeFileSync('src/App.jsx', content, 'utf8');
    console.log("Replaced QA-ТЕСТИРОВЩИК with СМЕТЧИК.");
} else {
    // If exact case/spelling differs
    const regex = /'QA-ТЕСТИРОВЩИК'/i;
    if (regex.test(content)) {
        content = content.replace(regex, "'СМЕТЧИК'");
        fs.writeFileSync('src/App.jsx', content, 'utf8');
        console.log("Replaced QA-ТЕСТИРОВЩИК with СМЕТЧИК (regex).");
    } else {
        console.log("Could not find QA-ТЕСТИРОВЩИК.");
    }
}
