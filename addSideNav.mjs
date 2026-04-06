import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Add id="reality" to the map section if not present
if (content.includes('className="professions-cloud-section"')) {
    content = content.replace('className="professions-cloud-section"', 'id="reality" className="professions-cloud-section"');
}

// 2. Add id="top" to the header if not present
if (content.includes('<header style={{ position: \'relative\' }}>')) {
    content = content.replace('<header style={{ position: \'relative\' }}>', '<header id="top" style={{ position: \'relative\' }}>');
}

// 3. Define SideNav component
const sideNavComponent = `
const SideNav = () => {
  const [activeId, setActiveId] = React.useState('top');

  const links = [
    { id: 'top', label: 'SYS_START' },
    { id: 'reality', label: 'REALITY' },
    { id: 'pains', label: 'ERR_LOG' },
    { id: 'solutions', label: 'SYS_BOOT' }
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      let current = 'top';
      const scrollY = window.scrollY;
      
      links.forEach(({id}) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop - 300 <= scrollY) {
          current = id;
        }
      });
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [links]);

  return (
    <div style={{
      position: 'fixed',
      right: '30px',
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      zIndex: 1000,
      alignItems: 'flex-end'
    }}>
      {links.map((link, i) => (
        <div key={link.id} 
             onClick={() => document.getElementById(link.id)?.scrollIntoView({behavior:'smooth'})}
             style={{
               display: 'flex', 
               alignItems: 'center', 
               gap: '15px', 
               cursor: 'pointer',
               opacity: activeId === link.id ? 1 : 0.4,
               transition: 'all 0.3s'
             }}
             className="nav-dot-container"
        >
          <span className="mono" style={{ 
              fontSize: '0.65rem', 
              color: activeId === link.id ? 'var(--neon-cyan)' : '#fff',
              textShadow: activeId === link.id ? '0 0 10px rgba(0,240,255,0.8)' : 'none',
              letterSpacing: '2px',
              visibility: activeId === link.id ? 'visible' : 'hidden'
          }}>
            {link.label}
          </span>
          <div style={{
             width: '8px', 
             height: '8px', 
             borderRadius: '50%', 
             background: activeId === link.id ? 'var(--neon-cyan)' : '#fff',
             boxShadow: activeId === link.id ? '0 0 10px var(--neon-cyan)' : 'none',
             transition: 'all 0.3s'
          }} />
        </div>
      ))}
    </div>
  );
};

`;

if (!content.includes('const SideNav =')) {
    content = content.replace('const App = () => {', sideNavComponent + '\nconst App = () => {');
}

if (!content.includes('<SideNav />')) {
    content = content.replace('<div className="app-container">', '<div className="app-container">\n      <SideNav />');
}

fs.writeFileSync('src/App.jsx', content, 'utf8');

let cssContent = fs.readFileSync('src/index.css', 'utf8');
if (!cssContent.includes('.nav-dot-container:hover span')) {
    cssContent += `
.nav-dot-container:hover span {
  visibility: visible !important;
  opacity: 1 !important;
  color: var(--neon-cyan) !important;
}
.nav-dot-container:hover div {
  background: var(--neon-cyan) !important;
  box-shadow: 0 0 10px var(--neon-cyan) !important;
  transform: scale(1.5);
}
`;
    fs.writeFileSync('src/index.css', cssContent, 'utf8');
}
