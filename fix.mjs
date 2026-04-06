import fs from 'fs';

const lines = fs.readFileSync('src/App.jsx', 'utf8').split(/\r?\n/);
lines.splice(66, 17, 
  `const CyberNav = () => {`,
  `  return (`,
  `    <nav className="cyber-nav">`,
  `      <div className="nav-logo syncopate">Futur<span className="text-cyan">AI</span></div>`,
  `      <div className="nav-links mono">`,
  `         <a href="#pains">[ ДИАГНОСТИКА ]</a>`,
  `         <a href="#solutions">[ АРХИТЕКТУРА ]</a>`,
  `      </div>`,
  `      <button className="cyber-btn-small" onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}>СИНХРОНИЗАЦИЯ</button>`,
  `    </nav>`,
  `  );`,
  `};`
);
fs.writeFileSync('src/App.jsx', lines.join('\n'), 'utf8');
console.log('Fixed src/App.jsx');
