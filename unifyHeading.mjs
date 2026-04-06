import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Update the Heading
const oldHeadingRegex = /<h2[^>]*>.*?АРХИТЕКТУРА РЕШЕНИЯ: ЦИФРОВОЙ ОТДЕЛ.*?<\/h2>/;
const newHeading = `<h2 className="mono text-cyan" style={{ fontSize: '1.7rem', letterSpacing: '5px', marginBottom: '60px', textShadow: '0 0 10px rgba(10, 255, 255, 0.5)', textAlign: 'left', position: 'relative', zIndex: 10, background: 'var(--bg-color)' }}>[ АРХИТЕКТУРА РЕШЕНИЯ: ЦИФРОВОЙ ОТДЕЛ ]</h2>`;

if (oldHeadingRegex.test(content)) {
    content = content.replace(oldHeadingRegex, newHeading);
}

// 2. Make UnifiedSystemBoot transparent
const bootPanelRegex = /className="hud-panel"\s*initial=\{\{\s*opacity:\s*0,\s*y:\s*30\s*\}\}\s*whileInView=\{\{\s*opacity:\s*1,\s*y:\s*0\s*\}\}\s*viewport=\{\{\s*once:\s*true,\s*margin:\s*'-100px'\s*\}\}\s*style=\{\{\s*padding:\s*'30px'\s*\}\}/;

const newBootPanel = `className="hud-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            style={{ padding: '30px', background: 'transparent', backdropFilter: 'none' }}`;

if (bootPanelRegex.test(content)) {
    content = content.replace(bootPanelRegex, newBootPanel);
}

fs.writeFileSync('src/App.jsx', content, 'utf8');
console.log("Updated heading and transparent background.");
