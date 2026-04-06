import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Title spacing
// Let's find <motion.h1 className="title-main glitch-text"
const titleRegex = /(<motion\.h1[^>]*className="title-main glitch-text"[^>]*>)/;
if (titleRegex.test(content)) {
    // remove any existing style
    // add style={{ margin: '60px 0' }}
    content = content.replace(/(<motion\.h1[^>]*className="title-main glitch-text")([\s\S]*?)>/, (match, p1, p2) => {
        if (match.includes('style={{')) {
            return match.replace(/style=\{\{.*?\}\}/, `style={{ margin: '60px 0' }}`);
        } else {
            return match.replace('>', ` style={{ margin: '80px 0' }}>`);
        }
    });
    console.log("Added margin to title.");
}

// 2. We need to add AgentProgressBar Component before UnifiedSystemBoot
const progBarComp = `
const AgentProgressBar = ({ delay }) => {
  const [progress, setProgress] = React.useState(0);
  const [started, setStarted] = React.useState(false);

  React.useEffect(() => {
    let t;
    if (started) {
       t = setInterval(() => {
         setProgress(p => {
            if (p >= 100) { clearInterval(t); return 100; }
            return p + 4;
         });
       }, 15);
    }
    return () => clearInterval(t);
  }, [started]);

  return (
    <div style={{ marginTop: '12px', width: '100%' }}>
       <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: 'var(--neon-cyan)', opacity: 0.8, marginBottom: '4px', letterSpacing: '1px' }} className="mono">
         <span>SYS_MODULE_READY</span>
         <span>{progress}%</span>
       </div>
       <div style={{ height: '3px', background: 'rgba(0, 240, 255, 0.1)', width: '100%', borderRadius: '2px', overflow: 'hidden' }}>
         <motion.div
           initial={{ width: '0%' }}
           whileInView={{ width: '100%' }}
           viewport={{ once: true }}
           onViewportEnter={() => {
              setTimeout(() => setStarted(true), delay * 1000);
           }}
           transition={{ delay: delay, duration: 0.4, ease: "easeOut" }}
           style={{ height: '100%', background: 'var(--neon-cyan)', boxShadow: '0 0 8px var(--neon-cyan)' }}
         />
       </div>
    </div>
  );
};

`;

if (!content.includes('AgentProgressBar')) {
    content = content.replace('const UnifiedSystemBoot = () => {', progBarComp + 'const UnifiedSystemBoot = () => {');
}

// 3. Update the mappings in UnifiedSystemBoot
// Increase font sizes and replace old motion.div bar with <AgentProgressBar>
const oldRoleText = /fontSize:\s*'1rem'/g;
content = content.replace(oldRoleText, "fontSize: '1.25rem'");

const oldDescText = /fontSize:\s*'0.8rem'/g;
content = content.replace(oldDescText, "fontSize: '0.9rem'");

const oldBarRegex = /<motion\.div\s*initial=\{\{\s*width:\s*'10%'\s*\}\}\s*whileInView=\{\{\s*width:\s*'100%'\s*\}\}\s*viewport=\{\{\s*once:\s*true\s*\}\}\s*transition=\{\{\s*delay:\s*0\.3 \+ \(i \* 0\.06\),\s*duration:\s*0\.4\s*\}\}\s*style=\{\{\s*height:\s*'2px',\s*background:\s*'var\(--neon-cyan\)',\s*marginTop:\s*'8px',\s*opacity:\s*0\.5\s*\}\}\s*\/>/;

if (oldBarRegex.test(content)) {
    content = content.replace(oldBarRegex, `<AgentProgressBar delay={0.3 + (i * 0.06)} />`);
    console.log("Replaced static bar with AgentProgressBar.");
}

fs.writeFileSync('src/App.jsx', content, 'utf8');
