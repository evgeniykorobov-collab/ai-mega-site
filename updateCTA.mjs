import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Remove "Запустить Синхронизацию" button
const btnRegex = /<motion\.div\s+initial=\{\{\s*opacity:\s*0,\s*y:\s*20\s*\}\}\s+animate=\{\{\s*opacity:\s*1,\s*y:\s*0\s*\}\}\s+transition=\{\{\s*delay:\s*1\.5\s*\}\}\s+style=\{\{\s*marginTop:\s*'40px'\s*\}\}\s*>\s*<button className="cyber-btn">Запустить Синхронизацию<\/button>\s*<\/motion\.div>/g;

if (btnRegex.test(content)) {
    content = content.replace(btnRegex, '');
    console.log("Button removed.");
} else {
    // maybe formatted differently
    content = content.replace(/<motion\.div[^>]*>\s*<button className="cyber-btn">Запустить Синхронизацию<\/button>\s*<\/motion\.div>/g, '');
}

// 2. Adjust padding in DeadProfessionsCloud so it moves up
content = content.replace(/padding: '80px 20px'/g, "padding: '40px 20px'"); // Brings cloud higher

// 3. Create the new CTA Block
const ctaBlock = `
      {/* Mid-page CTA Section */}
      <section className="mid-cta-section" style={{ padding: '60px 20px 100px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-50px' }}
            style={{ maxWidth: '800px', margin: '0 auto' }}
        >
            <h2 className="glitch-text text-cyan" style={{ fontSize: '2.5rem', marginBottom: '20px', textTransform: 'uppercase' }}>
              Будь первым в AI-фикации бизнеса
            </h2>
            <p className="mono" style={{ color: '#aaa', fontSize: '1.2rem', marginBottom: '40px' }}>
              Успей внедрить нейросети раньше конкурентов и забери свою долю рынка.
            </p>
            <button className="cyber-btn" onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}>
              Обогнать остальных
            </button>
        </motion.div>
      </section>
`;

// Insert the CTA Block right after <DeadProfessionsCloud /> 
// and before <section id="pains">
// Wait, we injected <DeadProfessionsCloud /> after </header> previously.
const injectionPoint = /<DeadProfessionsCloud \/>\s*/;
if (injectionPoint.test(content)) {
    content = content.replace(injectionPoint, '<DeadProfessionsCloud />\n' + ctaBlock + '\n');
    console.log("CTA Block added.");
} else {
    console.log("Could not find <DeadProfessionsCloud /> element in return statement.");
}

fs.writeFileSync('src/App.jsx', content, 'utf8');
console.log("Script executed.");
