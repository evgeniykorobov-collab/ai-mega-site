import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');

// Define SideNav component
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
  }, []);

  return (
    <div style={{
      position: 'fixed',
      right: '40px',
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
    content = content.replace('export default function App() {', sideNavComponent + '\nexport default function App() {');
}

if (!content.includes('<SideNav />')) {
    content = content.replace('<div className="app-container">', '<div className="app-container">\n      <SideNav />');
}

fs.writeFileSync('src/App.jsx', content, 'utf8');

