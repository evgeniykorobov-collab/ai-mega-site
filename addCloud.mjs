import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');

const cloudComponent = `
const DeadProfessionsCloud = () => {
  const professions = [
    'КОПИРАЙТЕР', 'ОПЕРАТОР КОЛЛ-ЦЕНТРА', 'ПЕРЕВОДЧИК', 'SMM-МЕНЕДЖЕР', 
    'АССИСТЕНТ', 'ЛИДОГЕНЕРАТОР', 'СЕКРЕТАРЬ', 'СПЕЦИАЛИСТ ПОДДЕРЖКИ', 
    'КОНТЕНТ-МЕНЕДЖЕР', 'МОДЕРАТОР', 'HR-РЕКРУТЕР', 'ДИЗАЙНЕР БАННЕРОВ', 
    'ОПЕРАТОР ВВОДА ДАННЫХ', 'ДИСПЕТЧЕР', 'КОРРЕКТОР', 'ТЕЛЕМАРКЕТОЛОГ', 
    'SEO-ОПТИМИЗАТОР', 'РЕТУШЕР', 'EMAIL-МАРКЕТОЛОГ', 'БУХГАЛТЕР (ПЕРВИЧКА)', 
    'QA-ТЕСТИРОВЩИК', 'ТРАНСКРИБАТОР', 'СЦЕНАРИСТ', 'МЛАДШИЙ АНАЛИТИК', 
    'МЕНЕДЖЕР ЧАТОВ', 'АДМИНИСТРАТОР МАГАЗИНА', 'ТАБЕЛЬЩИК', 'ПАРСЕР ДАННЫХ',
    'МЕНЕДЖЕР ПО ПРОДАЖАМ (ХОЛОДНЫЕ)', 'ПОМОЩНИК РУКОВОДИТЕЛЯ'
  ];

  const styledProfessions = professions.map((p, i) => ({
    text: p,
    size: i % 3 === 0 ? '1.6rem' : (i % 2 === 0 ? '1.1rem' : '1.4rem'),
    color: i % 4 === 0 ? 'var(--neon-red)' : (i % 5 === 0 ? 'var(--neon-cyan)' : '#555'),
    opacity: i % 4 === 0 ? 0.9 : 0.6,
  }));

  const row1 = styledProfessions.slice(0, 10);
  const row2 = styledProfessions.slice(10, 20);
  const row3 = styledProfessions.slice(20, 30);

  const MarqueeRow = ({ items, duration, direction }) => {
    // Duplicate 4 times so the scrolling is continuous and doesn't run out of elements
    const content = [...items, ...items, ...items, ...items].map((item, i) => (
      <span key={i} className="mono" style={{
        display: 'inline-block',
        margin: '0 15px',
        padding: '12px 24px',
        fontSize: item.size,
        color: item.color,
        textDecoration: 'line-through',
        opacity: item.opacity,
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '8px',
        background: '#070707',
        textShadow: item.color === 'var(--neon-red)' ? '0 0 10px rgba(255, 10, 10, 0.5)' : (item.color === 'var(--neon-cyan)' ? '0 0 10px rgba(10, 255, 255, 0.5)' : 'none')
      }}>
        {item.text}
      </span>
    ));

    return (
      <div style={{ display: 'flex', whiteSpace: 'nowrap', marginBottom: '25px', overflow: 'hidden' }}>
        <motion.div
          animate={{ x: direction === 'left' ? ["0%", "-50%"] : ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: duration, ease: "linear" }}
          style={{ display: 'flex', width: 'fit-content' }}
        >
          {content}
        </motion.div>
      </div>
    );
  };

  return (
    <section className="professions-cloud-section" style={{ padding: '80px 0', backgroundColor: '#020202', overflow: 'hidden', borderTop: '1px solid #111', borderBottom: '1px solid #111' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px', padding: '0 20px' }}>
        <h3 className="mono text-red" style={{ fontSize: '1.2rem', letterSpacing: '4px', marginBottom: '15px' }}>[ НЕИЗБЕЖНАЯ РЕАЛЬНОСТЬ ]</h3>
        <p className="mono" style={{ color: '#666', fontSize: '1.1rem', textTransform: 'uppercase' }}>Эти профессии навсегда удаляются из штатного расписания</p>
      </div>
      
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100px', height: '100%', background: 'linear-gradient(to right, #020202, transparent)', zIndex: 10 }}></div>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100%', background: 'linear-gradient(to left, #020202, transparent)', zIndex: 10 }}></div>
        
        <MarqueeRow items={row1} duration={40} direction="left" />
        <MarqueeRow items={row2} duration={55} direction="right" />
        <MarqueeRow items={row3} duration={45} direction="left" />
      </div>
    </section>
  );
};
`;

// Insert component before export default function App()
content = content.replace('export default function App() {', cloudComponent + '\nexport default function App() {');

// Insert usage after </header>
const headerEndIdx = content.indexOf('</header>');
if (headerEndIdx !== -1) {
    const afterHeader = headerEndIdx + '</header>'.length;
    content = content.substring(0, afterHeader) + '\n      {/* Profession Cloud Section */}\n      <DeadProfessionsCloud />\n' + content.substring(afterHeader);
    fs.writeFileSync('src/App.jsx', content, 'utf8');
    console.log('Successfully injected DeadProfessionsCloud');
} else {
    console.log('Failed to find </header>');
}
