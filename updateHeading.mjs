import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');

const regex = /<div style=\{\{ textAlign: 'center', marginBottom: '50px' \}\}>\s*<h3 className="mono text-red" style=\{\{ fontSize: '1\.2rem', letterSpacing: '4px', marginBottom: '15px' \}\}>\[ НЕИЗБЕЖНАЯ РЕАЛЬНОСТЬ \]\<\/h3>\s*<p className="mono" style=\{\{ color: '#aaa', fontSize: '1\.1rem', textTransform: 'uppercase' \}\}>Эти профессии навсегда удаляются из штатного расписания<\/p>\s*<\/div>/;

const newBlock = `<div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h3 className="mono text-cyan" style={{ fontSize: '1.7rem', letterSpacing: '5px', marginBottom: '15px', textShadow: '0 0 10px rgba(10, 255, 255, 0.5)' }}>[ НЕИЗБЕЖНАЯ РЕАЛЬНОСТЬ ]</h3>
        <p className="mono" style={{ color: 'var(--neon-cyan)', opacity: 0.7, fontSize: '1.2rem', textTransform: 'uppercase' }}>Эти профессии навсегда удаляются из штатного расписания</p>
      </div>`;

if (regex.test(content)) {
    content = content.replace(regex, newBlock);
    fs.writeFileSync('src/App.jsx', content, 'utf8');
    console.log("Updated heading style successfully.");
} else {
    console.log("Could not match the original heading block.");
}
