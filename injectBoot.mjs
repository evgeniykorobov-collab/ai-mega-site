import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');

const bootComponent = `
const UnifiedSystemBoot = () => {
    const agents = [
        { id: 1, role: 'ИИ-ДИРЕКТОЛОГ', desc: 'Управление РК', icon: 'M2 2h4v12H2z M10 8h4v6h-4z' },
        { id: 2, role: 'ИИ-МАРКЕТОЛОГ', desc: 'Сбор ЦА и стратегий', icon: 'M8 2L2 14h12z' },
        { id: 3, role: 'ИИ-ПРОДАВЕЦ', desc: 'Голосовые продажи', icon: 'M2 8a6 6 0 1112 0 6 6 0 01-12 0z' },
        { id: 4, role: 'ИИ-СНАБЖЕНЕЦ', desc: 'Поиск цен / Отчеты', icon: 'M2 2h12v4H2z M2 10h8v4H2z' },
        { id: 5, role: 'ИИ-АНАЛИТИК', desc: 'Парсинг Big Data', icon: 'M2 14V2l4 4 4-4 4 4v8z' },
        { id: 6, role: 'ИИ-СЕОШНИК', desc: 'Семантическое ядро', icon: 'M2 2h12v12H2z M5 5h6v6H5z' },
        { id: 7, role: 'ИИ-АССИСТЕНТ', desc: 'Обработка чатов', icon: 'M8 2c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z' },
        { id: 8, role: 'ИИ-РЕКРУТЕР', desc: 'Массовый скрининг', icon: 'M8 2a3 3 0 100 6 3 3 0 000-6z M4 14c0-2.2 3.6-4 4-4s4 1.8 4 4' },
        { id: 9, role: 'ИИ-СЦЕНАРИСТ', desc: 'Создание прогревов', icon: 'M4 2h8v12H4z M6 5h4v2H6z M6 9h4v2H6z' },
        { id: 10, role: 'ИИ-СМЕТЧИК', desc: 'Калькуляция проектов', icon: 'M2 2h12v2H2z M2 6h12v2H2z M2 10h12v2H2z' },
        { id: 11, role: 'ИИ-БУХГАЛТЕР', desc: 'Сверки и первичка', icon: 'M2 2h12v12H2z M4 4h2v2H4z M8 4h2v2H8z M4 8h6v2H4z' },
        { id: 12, role: 'ИИ-КОПИРАЙТЕР', desc: 'Написание SEO-текстов', icon: 'M2 12V2h10l2 2v8H2z' },
        { id: 13, role: 'ИИ-САППОРТ', desc: 'Чат-поддержка 24/7', icon: 'M2 2h12v8H2z M4 10l-2 4 4-2h8v-2H4z' },
    ];

    return (
      <div style={{ maxWidth: '1000px', margin: '0 auto 100px' }}>
          <motion.div
            className="hud-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            style={{ padding: '30px' }}
          >
             <div className="terminal-panel-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                     <div className="terminal-dot" style={{background: '#ff5f56'}}></div>    
                     <div className="terminal-dot" style={{background: '#ffbd2e'}}></div>    
                     <div className="terminal-dot" style={{background: '#27c93f'}}></div>    
                 </div>
                 <div className="mono" style={{ fontSize: '0.7rem', color: 'var(--neon-cyan)', opacity: 0.6, letterSpacing: '2px' }}>FUTUR.AI_SYS_BOOT // v2.4.1</div>
             </div>
             
             <div className="mono text-cyan" style={{ fontSize: '1.2rem', marginBottom: '35px', opacity: 0.9 }}>
                <span style={{ animation: 'blink 1s step-end infinite' }}>_</span> &gt; ЗАПУСК ЦИФРОВОГО ОТДЕЛА: РАЗВЕРТЫВАНИЕ СИСТЕМЫ
             </div>
             
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '15px' }}>
                {agents.map((agent, i) => (
                    <motion.div
                       key={agent.id}
                       initial={{ opacity: 0, x: -20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.2 + (i * 0.08), duration: 0.3 }}
                       style={{ display: 'flex', alignItems: 'flex-start', background: 'rgba(0,240,255,0.03)', padding: '12px 15px', border: '1px solid rgba(0,240,255,0.1)', borderRadius: '6px' }}
                    >
                       <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" style={{ opacity: 0.7, color: 'var(--neon-cyan)', marginRight: '15px', marginTop: '2px', flexShrink: 0 }}>
                          <path d={agent.icon} />
                       </svg>
                       <div style={{ width: '100%' }}>
                          <div className="mono" style={{ fontSize: '1rem', fontWeight: 'bold', color: '#fff', letterSpacing: '1px' }}>{agent.role}</div>
                          <div className="mono" style={{ fontSize: '0.8rem', color: 'var(--neon-cyan)', opacity: 0.7, marginTop: '2px' }}>{agent.desc}</div>
                          <motion.div 
                            initial={{ width: '10%' }} 
                            whileInView={{ width: '100%' }} 
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + (i * 0.08), duration: 0.5 }}
                            style={{ height: '2px', background: 'var(--neon-cyan)', marginTop: '8px', opacity: 0.5 }} 
                          />
                       </div>
                    </motion.div>
                ))}
             </div>
             
             <motion.div 
               initial={{ opacity: 0 }} 
               whileInView={{ opacity: 1 }} 
               viewport={{ once: true }}
               transition={{ delay: 2.0 }}
               className="mono"
               style={{ marginTop: '35px', textAlign: 'center', fontSize: '0.9rem', color: '#fff', letterSpacing: '1px' }}
             >
                [ СИСТЕМА ЕДИНА ] &gt; ВСЕ МОДУЛИ АКТИВНЫ. ПЕРЕДАЧА УПРАВЛЕНИЯ...
             </motion.div>
          </motion.div>
      </div>
    );
};
`;

const startIdx = content.indexOf('export default function App() {');
if (startIdx !== -1 && !content.includes('UnifiedSystemBoot')) {
    content = content.substring(0, startIdx) + bootComponent + '\n' + content.substring(startIdx);
}

const h2Match = content.match(/<h2[^>]*>.*?ЦИФРОВОЙ ОТДЕЛ.*?<\/h2>/);
if (h2Match && !content.includes('<UnifiedSystemBoot />')) {
    const endOfH2 = h2Match.index + h2Match[0].length;
    content = content.substring(0, endOfH2) + '\n\n        <UnifiedSystemBoot />\n' + content.substring(endOfH2);
    
    let css = fs.readFileSync('src/index.css', 'utf8');
    if (!css.includes('@keyframes blink')) {
       css += '\n@keyframes blink { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n';
       fs.writeFileSync('src/index.css', css, 'utf8');
    }
    
    fs.writeFileSync('src/App.jsx', content, 'utf8');
    console.log("Injected System Boot correctly.");
} else {
    console.log("Failed to inject - likely already injected or h2 not found.");
}
