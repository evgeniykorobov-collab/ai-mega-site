import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Center the architecture heading and add an arrow above it
const oldHeadingRegex = /<h2 className="mono text-cyan"[^>]*>\[ АРХИТЕКТУРА РЕШЕНИЯ: ЦИФРОВОЙ ОТДЕЛ \]\<\/h2>/;
const newHeading = `
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px', marginTop: '-30px' }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--neon-red)" strokeWidth="2" style={{ animation: 'bounce 2s infinite' }}>
              <path d="M12 2v20M5 15l7 7 7-7" />
            </svg>
        </div>
        <h2 className="mono text-cyan" style={{ fontSize: '1.7rem', letterSpacing: '5px', marginBottom: '50px', textShadow: '0 0 10px rgba(10, 255, 255, 0.5)', textAlign: 'center', position: 'relative', zIndex: 10, background: 'transparent' }}>[ АРХИТЕКТУРА РЕШЕНИЯ: ЦИФРОВОЙ ОТДЕЛ ]</h2>
`;
if (oldHeadingRegex.test(content)) {
    content = content.replace(oldHeadingRegex, newHeading);
}

// 2. Replace the UnifiedSystemBoot component entirely
const systemBootRegex = /const UnifiedSystemBoot = \(\) => \{([\s\S]*?)return \([\s\S]*?\);\n\};\n/g;

const newBootComponent = `const UnifiedSystemBoot = () => {
    const agents = [
        { id: 1, role: 'ИИ-ДИРЕКТОЛОГ', desc: 'Управление РК', icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20zm0 15a5 5 0 1 1 0-10 5 5 0 1 1 0 10zm0-7a2 2 0 1 0 0 4 2 2 0 1 0 0-4z' }, // target
        { id: 2, role: 'ИИ-МАРКЕТОЛОГ', desc: 'Анализ ЦА и стратегий', icon: 'M12 2L2 22h20L12 2zm0 6l3 10H9l3-10z' }, // triangle/funnel
        { id: 3, role: 'ИИ-ПРОДАВЕЦ', desc: 'Голосовые продажи', icon: 'M2 2h4l1 5h15l-3 9H8L5 4H2V2zm6 16a2 2 0 1 0 0 4 2 2 0 1 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4z' }, // cart
        { id: 4, role: 'ИИ-СНАБЖЕНЕЦ', desc: 'Поиск цен / Отчеты', icon: 'M2 4h14v10H2zm14 2h6v8h-6z M4 16a2 2 0 1 0 0 4 2 2 0 1 0 0-4zm12 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4z' }, // truck
        { id: 5, role: 'ИИ-АНАЛИТИК', desc: 'Парсинг Big Data', icon: 'M2 22V2h2v20H2zm6-8V2h4v12H8zm8-10v20h4V4h-4z' }, // bar chart
        { id: 6, role: 'ИИ-СЕОШНИК', desc: 'Семантическое ядро', icon: 'M10 2a8 8 0 1 0 5 14.3l6 6 1.4-1.4-6-6A8 8 0 1 0 10 2zm0 14a6 6 0 1 1 0-12 6 6 0 1 1 0 12z' }, // search
        { id: 7, role: 'ИИ-АССИСТЕНТ', desc: 'Обработка чатов', icon: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm-1-9v4h4v-2h-2V9h-2z' }, // clock
        { id: 8, role: 'ИИ-РЕКРУТЕР', desc: 'Массовый скрининг', icon: 'M12 12a5 5 0 1 0 0-10 5 5 0 1 0 0 10zm-7 8c0-3.9 5-6 7-6s7 2.1 7 6v2H5v-2z' }, // user
        { id: 9, role: 'ИИ-СЦЕНАРИСТ', desc: 'Создание прогревов', icon: 'M3 3v18h18V3H3zm14 14H7v-2h10v2zm0-4H7v-2h10v2zm0-4H7V7h10v2z' }, // doc
        { id: 10, role: 'ИИ-СМЕТЧИК', desc: 'Калькуляция проектов', icon: 'M4 2h16v20H4V2zm4 4v4h8V6H8zm0 6v2h2v-2H8zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm-8 4v2h2v-2H8zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z' }, // calculator
        { id: 11, role: 'ИИ-БУХГАЛТЕР', desc: 'Сверки и первичка', icon: 'M6 2H2v20h20V2h-4v6H6V2zm12 10H6v2h12v-2zm0 4H6v2h12v-2z M8 2h8v4H8V2z' }, // clipboard
        { id: 12, role: 'ИИ-КОПИРАЙТЕР', desc: 'Генерация SEO-текстов', icon: 'M3 4v16h18V4H3zm10 14H5v-2h8v2zm4-4H5v-2h12v2zm0-4H5V8h12v2z' }, // keyboard/text
        { id: 13, role: 'ИИ-САППОРТ', desc: 'Чат-поддержка 24/7', icon: 'M12 2a9 9 0 0 0-9 9v7h3v-6H4a7 7 0 0 1 14 0h-2v6h3v-7a9 9 0 0 0-9-9z M8 20h8v2H8v-2z' }, // headset
        { id: 14, role: 'ИИ-ЮРИСТ', desc: 'Договоры и акты', icon: 'M12 2L2 7h20L12 2zm0 6L4 12h16l-8-4zm-6 6v6h2v-6H6zm10 0v6h2v-6h-2z M2 20h20v2H2v-2z' }, // scales/bank
        { id: 15, role: 'ИИ-РУКОВОДИТЕЛЬ', desc: 'Оркестратор процессов', icon: 'M12 2l3 6 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1 3-6z' }, // star
    ];

    return (
      <div style={{ maxWidth: '1000px', margin: '0 auto 100px' }}>
          <motion.div
            className="hud-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            style={{ padding: '30px', background: 'transparent', backdropFilter: 'none' }}
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
                       transition={{ delay: 0.2 + (i * 0.06), duration: 0.3 }}
                       style={{ display: 'flex', alignItems: 'flex-start', background: 'rgba(0,240,255,0.03)', padding: '12px 15px', border: '1px solid rgba(0,240,255,0.1)', borderRadius: '6px' }}
                    >
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.7, color: 'var(--neon-cyan)', marginRight: '15px', marginTop: '2px', flexShrink: 0 }}>
                          <path d={agent.icon} />
                       </svg>
                       <div style={{ width: '100%' }}>
                          <div className="mono" style={{ fontSize: '1rem', fontWeight: 'bold', color: '#fff', letterSpacing: '1px' }}>{agent.role}</div>
                          <div className="mono" style={{ fontSize: '0.8rem', color: 'var(--neon-cyan)', opacity: 0.7, marginTop: '2px' }}>{agent.desc}</div>
                          <motion.div 
                            initial={{ width: '10%' }} 
                            whileInView={{ width: '100%' }} 
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + (i * 0.06), duration: 0.4 }}
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
               transition={{ delay: 1.5 }}
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

if (systemBootRegex.test(content)) {
    content = content.replace(systemBootRegex, newBootComponent);
    
    // Add bounce animation if not present
    let css = fs.readFileSync('src/index.css', 'utf8');
    if (!css.includes('@keyframes bounce')) {
       css += '\n@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(10px); } }\n';
       fs.writeFileSync('src/index.css', css, 'utf8');
    }
    
    fs.writeFileSync('src/App.jsx', content, 'utf8');
    console.log("Updated heading and Boot module.");
} else {
    console.log("Could not find UnifiedSystemBoot to replace.");
}
