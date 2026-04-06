import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');

const startIdx = content.indexOf('<header className="hero-section"');
if (startIdx !== -1) {
    const endIdx = content.indexOf('</header>', startIdx);
    console.log(content.substring(startIdx, endIdx + 9));
} else {
    console.log('Header not found');
}
