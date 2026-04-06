import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');

// 1. In DeadProfessionsCloud, modify the <section padding from 80px 20px to 0px 20px 80px and add negative margin top
content = content.replace(/<section className="professions-cloud-section" style=\{\{ padding: '80px 20px', backgroundColor: 'transparent', position: 'relative', zIndex: 1 \}\}>/, 
    `<section className="professions-cloud-section" style={{ padding: '0px 20px 80px', marginTop: '-8vh', backgroundColor: 'transparent', position: 'relative', zIndex: 1 }}>`);

// 2. The heading inside DeadProfessionsCloud has style={{ textAlign: 'center', marginBottom: '80px' }}
// If he meant the gap BETWEEN the heading and the professions is too large, I will reduce it to 50px.
content = content.replace(/<div style=\{\{ textAlign: 'center', marginBottom: '80px' \}\}>/, 
    `<div style={{ textAlign: 'center', marginBottom: '40px' }}>`);

fs.writeFileSync('src/App.jsx', content, 'utf8');
console.log("Reduced gap margins and padding.");
