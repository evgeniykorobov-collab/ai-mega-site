const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Rename FUTUR_AI to NEUROACTIVE anywhere visible except IDs
code = code.split('FUTUR_AI').join('NEUROACTIVE');

// 2. Rewrite the Audit Block to look like other panels + Add Footer
const startIndex = code.indexOf('<section id="audit"');
const endIndex = code.indexOf('</section>', startIndex) + 10;

const newAuditAndFooter = `<section id="audit" style={{ padding: '80px 5%', maxWidth: '800px', margin: '0 auto', paddingBottom: '150px' }}>
        <div className="terminal-panel" style={{ width: '100%' }}>
            
            <div className="terminal-panel-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div className="terminal-dot" style={{background: '#ff5f56'}}></div>    
                    <div className="terminal-dot" style={{background: '#ffbd2e'}}></div>    
                    <div className="terminal-dot" style={{background: '#27c93f'}}></div>    
                </div>
                <div className="mono" style={{ fontSize: '0.7rem', color: 'var(--neon-cyan)', opacity: 0.8, letterSpacing: '2px' }}>[ PROTOCOL_FINAL_STAGE ]</div>
            </div>

            <div className="terminal-body" style={{ textAlign: 'center', padding: '60px 40px' }}>
                <h2 className="title-main syncopate" style={{ fontSize: '2.5rem', color: '#fff', textShadow: '0 0 15px rgba(0,240,255,0.3)', margin: '0 0 20px 0' }}>
                    СИСТЕМА ГОТОВА<br/><span style={{ color: 'var(--neon-cyan)' }}>К ВНЕДРЕНИЮ</span>
                </h2>
                
                <p className="mono" style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto 40px' }}>
                    &gt; Инициализация алгоритмов сокращения ФОТ на 40%. Вашему бизнесу больше не нужны перекуры, больничные и выходные. 
                    <br/><br/>
                    <span style={{color: '#fff'}}>&gt; 100% конверсия. 0 ошибок. Полный контроль.</span>
                </p>
                
                <a href="https://t.me/korobovevgen" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <button className="cyber-btn" style={{ transform: 'scale(1.1)' }}>[ ЗАПРОСИТЬ АУДИТ В TELEGRAM ]</button>
                </a>
            </div>
        </div>
      </section>

      {/* Cyber Footer */}
      <footer style={{ borderTop: '1px solid rgba(0,240,255,0.2)', padding: '30px 5%', background: 'rgba(0,0,0,0.5)', textAlign: 'center' }}>
          <div className="mono" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', opacity: 0.7 }}>
              &gt; SYSTEM_READY // NEUROACTIVE © 2026<br/>
              &gt; АВТОМАТИЗАЦИЯ БИЗНЕС-ПРОЦЕССОВ И ИИ-АГЕНТЫ
          </div>
      </footer>`;

if (startIndex !== -1 && endIndex !== -1) {
    code = code.substring(0, startIndex) + newAuditAndFooter + code.substring(endIndex);
}

fs.writeFileSync('src/App.jsx', code);
console.log("Renamed to NEUROACTIVE, fixed Audit block matching others, and added a footer.");
