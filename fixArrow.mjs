import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');

// The end of pains section might look like:
//           ].map((pain, i) => (
//               ...
//           ))}
//         </div>
//       </section>

// Find the arrow block and remove it from where it is
const arrowRegex = /<div style=\{\{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px', marginTop: '-30px' \}\}>\s*<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var\(--neon-red\)" strokeWidth="2" style=\{\{ animation: 'bounce 2s infinite' \}\}>\s*<path d="M12 2v20M5 15l7 7 7-7" \/>\s*<\/svg>\s*<\/div>/;

if (arrowRegex.test(content)) {
    content = content.replace(arrowRegex, '');
    console.log("Removed arrow from old location.");
}

// Now insert it at the end of the .flow-container in pains section
// We look for the closing of flow-container which precedes </section> for pains.
// We can just find:
//    </div>
// </section>
// <section id="solutions">
const injectionPoint = /<\/div>\s*<\/section>\s*(?:\{\/\*\s*Solutions Section\s*\*\/\}\s*)?<section id="solutions">/;

const newArrowBlock = `
          <div style={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--neon-red)" strokeWidth="2" style={{ animation: 'bounce 2s infinite' }}>
              <path d="M12 2v20M5 15l7 7 7-7" />
            </svg>
          </div>
        </div>
      </section>
      
      {/* Solutions Section */}
      <section id="solutions">`;

if (injectionPoint.test(content)) {
    content = content.replace(injectionPoint, newArrowBlock);
    fs.writeFileSync('src/App.jsx', content, 'utf8');
    console.log("Moved arrow to the bottom of the line!");
} else {
    // fallback finding flow-container end
    console.log("Could not find injection point. Trying alternative...");
    const fallback = /(<\/div>\s*<\/section>\s*<section id="solutions">)/;
    if (fallback.test(content)) {
         content = content.replace(fallback, `
          <div style={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--neon-red)" strokeWidth="2" style={{ animation: 'bounce 2s infinite' }}>
              <path d="M12 2v20M5 15l7 7 7-7" />
            </svg>
          </div>
        </div>
      </section>
      <section id="solutions">`);
         fs.writeFileSync('src/App.jsx', content, 'utf8');
         console.log("Fixed via fallback.");
    }
}
