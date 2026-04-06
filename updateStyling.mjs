import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');

const regex = /(<div className="terminal-body" style={{ position: 'relative', zIndex: 1 }}>\s*<div className="mono text-red mb-2">&gt; \[ERROR_CODE: \{pain\.id\}\] FATAL_EXCEPTION<\/div>\s*<div className="mono text-red mb-2" style=\{\{ fontSize: '1\.5rem', fontWeight: 'bold' \}\}>&gt; \{pain\.title\}<\/div>\s*<p className="mono text-red">&gt; \{pain\.desc\}<\/p>\s*<\/div>)/g;

const newJSX = `<div className="terminal-body" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="mono mb-3" style={{ fontSize: '0.65rem', opacity: 0.5, color: 'var(--neon-red)', letterSpacing: '0.05em' }}>&gt; [ERROR_CODE: {pain.id}] FATAL_EXCEPTION</div>
                    <div className="mono mb-2" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--neon-red)' }}>&gt; {pain.title}</div>
                    <p className="mono" style={{ color: 'var(--neon-red)' }}>&gt; {pain.desc}</p>
                  </div>`;

if (regex.test(content)) {
    content = content.replace(regex, newJSX);
    fs.writeFileSync('src/App.jsx', content, 'utf8');
    console.log('Styling updated successfully.');
} else {
    console.log('Could not match regex.');
}
