import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');

const regex = /<div className="terminal-panel-header" style=\{\{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' \}\}>\s*<div>/g;

if (regex.test(content)) {
    content = content.replace(regex, `<div className="terminal-panel-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>`);
    fs.writeFileSync('src/App.jsx', content, 'utf8');
    console.log('Fixed dots orientation.');
} else {
    console.log('Could not match target regex for dots.');
}
