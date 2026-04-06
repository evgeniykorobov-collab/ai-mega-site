import fs from 'fs';

// 1. Fix hero-content padding
let app = fs.readFileSync('src/App.jsx', 'utf8');
if (app.includes('<div className="hero-content">')) {
    app = app.replace('<div className="hero-content">', '<div className="hero-content" style={{ paddingTop: \'120px\' }}>');
}
fs.writeFileSync('src/App.jsx', app, 'utf8');
console.log("Fixed App.jsx top padding.");

// 2. Fix nav-bar transparency
let css = fs.readFileSync('src/index.css', 'utf8');
// remove background: rgba(2, 4, 10, 0.85);
css = css.replace(/background:\s*rgba\(2,\s*4,\s*10,\s*0\.85\);/, 'background: transparent;');
// remove border-bottom
css = css.replace(/border-bottom:\s*1px solid rgba\(0,\s*240,\s*255,\s*0\.2\);/, 'border-bottom: none;');
// remove backdrop-filter
css = css.replace(/backdrop-filter:\s*blur\(10px\);/, 'backdrop-filter: none;');

fs.writeFileSync('src/index.css', css, 'utf8');
console.log("Fixed index.css nav transparency.");
