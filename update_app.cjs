const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Set uniform height for flow-content terminal bodies.
// The user wants them ALL to be the same size, based on the biggest one.
// We'll add 'minHeight: "240px", display: "flex", flexDirection: "column", justifyContent: "center"'
// We currently have: `padding: '20px 30px'` 
const oldPadding = `padding: '20px 30px'`;
const newPadding = `padding: '20px 30px', minHeight: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center'`;
code = code.split(oldPadding).join(newPadding);

// 2. Update Nav to include all anchors
const oldNav = `<nav className={\`cyber-nav \${scrolled ? 'nav-scrolled' : ''}\`}>
        <div className="nav-logo syncopate">FUTUR_AI</div>
        <div className="nav-links mono">
          <a href="#solutions">АРХИТЕКТУРА</a>
          <div className="nav-divider"></div>
          <a href="#founder">КОМАНДА</a>
          <div className="nav-divider"></div>
          <button className="cyber-btn-small">НАЧАТЬ</button>
        </div>
      </nav>`;

const newNav = `<nav className={\`cyber-nav \${scrolled ? 'nav-scrolled' : ''}\`}>
        <div className="nav-logo syncopate" style={{cursor:'pointer'}} onClick={() => window.scrollTo(0,0)}>FUTUR_AI</div>
        <div className="nav-links mono">
          <a href="#pains">БОЛИ</a>
          <div className="nav-divider"></div>
          <a href="#solutions">РЕШЕНИЯ</a>
          <div className="nav-divider"></div>
          <a href="#humanization">ГУМАНИЗАЦИЯ</a>
          <div className="nav-divider"></div>
          <a href="#founder">АРХИТЕКТОР</a>
          <div className="nav-divider"></div>
          <a href="#audit" className="targetable-prof" style={{textDecoration:'none'}}>АУДИТ</a>
        </div>
      </nav>`;

if(code.indexOf(oldNav) !== -1) {
    code = code.replace(oldNav, newNav);
} else {
    // try to find it dynamically if whitespace changed
    const navStart = code.indexOf('<nav className={`cyber-nav');
    const navEnd = code.indexOf('</nav>', navStart) + 6;
    if(navStart !== -1) {
        code = code.substring(0, navStart) + newNav + code.substring(navEnd);
    }
}

// 3. Update the final #audit block
const oldAuditStr = `      {/* Final Console */}
      <section id="audit" style={{ textAlign: 'center', paddingBottom: '200px' }}>
        <h2 className="title-main syncopate" style={{ fontSize: '3rem' }}>СИСТЕМА ГОТОВА К ЗАГРУЗКЕ</h2>
        <p className="mono text-muted mb-4" style={{ fontSize: '1.2rem' }}>&gt; Подключите свой бизнес к нейросети и сократите косты на 40%.</p>
        <button className="cyber-btn" style={{ transform: 'scale(1.2)', marginTop: '40px' }}>[ НАЧАТЬ АУДИТ ]</button>
      </section>`;

const newAuditStr = `      {/* Final Console */}
      <section id="audit" style={{ padding: '100px 20px 200px', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="terminal-panel" style={{ padding: '2px' }}>
                <div style={{ position: 'relative', padding: '60px 40px', background: 'rgba(0,10,15,0.9)', borderRadius: '4px', overflow: 'hidden', textAlign: 'center' }}>
                    
                    {/* Cyber background effects */}
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'radial-gradient(circle at center, rgba(0,240,255,0.1) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
                    <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: '1px', background: 'linear-gradient(90deg, transparent, var(--neon-cyan), transparent)', boxShadow: '0 0 10px var(--neon-cyan)' }}></div>
                    <div style={{ position: 'absolute', bottom: 0, left: '20%', right: '20%', height: '1px', background: 'linear-gradient(90deg, transparent, var(--neon-cyan), transparent)', boxShadow: '0 0 10px var(--neon-cyan)' }}></div>
                    
                    <div className="terminal-panel-header" style={{ position: 'absolute', top: 0, left: 0, right: 0, background: 'rgba(0,240,255,0.05)', borderBottom: '1px solid rgba(0,240,255,0.2)', padding: '10px 20px', display: 'flex', justifyContent: 'center' }}>
                         <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--neon-cyan)', letterSpacing: '2px', textShadow: '0 0 5px rgba(0,240,255,0.5)' }}>[ PROTOCOL_FINAL_STAGE ]</div>
                    </div>

                    <h2 className="title-main syncopate" style={{ fontSize: '2.5rem', color: '#fff', textShadow: '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(0,240,255,0.3)', marginTop: '40px', marginBottom: '20px' }}>
                        СИСТЕМА ГОТОВА<br/><span style={{ color: 'var(--neon-cyan)' }}>К ВНЕДРЕНИЮ</span>
                    </h2>
                    
                    <p className="mono" style={{ fontSize: '1.2rem', color: '#ccc', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto 40px' }}>
                        &gt; Инициализация алгоритмов сокращения ФОТ на 40%. Вашему бизнесу больше не нужны перекуры, больничные и выходные. 
                        <br/><br/>
                        &gt; 100% конверсия. 0 ошибок. Полный контроль.
                    </p>
                    
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                        <div style={{ position: 'absolute', left: '-20px', right: '-20px', top: '50%', height: '1px', background: 'rgba(0,240,255,0.3)', zIndex: 0 }}></div>
                        <a href="https://t.me/korobovevgen" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', position: 'relative', zIndex: 1 }}>
                            <button className="cyber-btn" style={{ transform: 'scale(1.1)' }}>[ ЗАПРОСИТЬ АУДИТ В TELEGRAM ]</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </section>`;

if(code.indexOf(oldAuditStr) !== -1) {
    code = code.replace(oldAuditStr, newAuditStr);
} else {
    // Dynamic replace just in case
    const auditStart = code.indexOf('<section id="audit"');
    if (auditStart !== -1) {
        const preAudit = code.lastIndexOf('{/* Final Console */}', auditStart);
        const auditEnd = code.indexOf('</section>', auditStart) + 10;
        code = code.substring(0, preAudit !== -1 ? preAudit : auditStart) + newAuditStr + code.substring(auditEnd);
    }
}

fs.writeFileSync('src/App.jsx', code);
console.log("Nav anchors updated, audit section redesigned, and terminal panels set to uniform heights.");
