import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');

const current = "textAlign: 'center' }}>[ КРИТИЧЕСКИЕ ОШИБКИ БИЗНЕСА ]";
if (content.includes(current)) {
    content = content.replace(current, "textAlign: 'left', position: 'relative', zIndex: 10, background: 'var(--bg-color)', display: 'inline-block', paddingRight: '20px' }}>[ КРИТИЧЕСКИЕ ОШИБКИ БИЗНЕСА ]");
    fs.writeFileSync('src/App.jsx', content, 'utf8');
    console.log("Fixed alignment.");
} else {
    content = content.replace(/textAlign:\s*'center'\s*\}\}>\s*\[ КРИТИЧЕСКИЕ ОШИБКИ БИЗНЕСА \]/, "textAlign: 'left', position: 'relative', zIndex: 10, background: 'var(--bg-color)', display: 'inline-block', paddingRight: '20px' }}>[ КРИТИЧЕСКИЕ ОШИБКИ БИЗНЕСА ]");
    fs.writeFileSync('src/App.jsx', content, 'utf8');
    console.log("Fixed alignment (regex).");
}
