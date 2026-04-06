import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');

const regex = /<h2 className="section-title text-red" style=\{\{ marginBottom: "80px" \}\}>КРИТИЧЕСКИЕ ОШИБКИ БИЗНЕСА<\/h2>/;
const newHeading = `<h2 className="mono text-red" style={{ fontSize: '1.7rem', letterSpacing: '5px', marginBottom: '80px', textShadow: '0 0 10px rgba(255, 10, 10, 0.5)', textAlign: 'center' }}>[ КРИТИЧЕСКИЕ ОШИБКИ БИЗНЕСА ]</h2>`;

if (regex.test(content)) {
    content = content.replace(regex, newHeading);
    fs.writeFileSync('src/App.jsx', content, 'utf8');
    console.log("Replaced heading successfully.");
} else {
    // try a fuzzy match
    const fuzzyRegex = /<h2[^>]*>КРИТИЧЕСКИЕ ОШИБКИ БИЗНЕСА<\/h2>/;
    if (fuzzyRegex.test(content)) {
        content = content.replace(fuzzyRegex, newHeading);
        fs.writeFileSync('src/App.jsx', content, 'utf8');
        console.log("Replaced heading successfully (fuzzy).");
    } else {
        console.log("Could not find the heading.");
    }
}
