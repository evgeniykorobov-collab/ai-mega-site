import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');

const regex = /const DeadProfessionsCloud = \(\) => \{[\s\S]*?^};\n?/m;

const newComponent = `const DeadProfessionsCloud = () => {
  const professions = [
    'КОПИРАЙТЕР', 'ОПЕРАТОР КОЛЛ-ЦЕНТРА', 'ПЕРЕВОДЧИК', 'SMM-МЕНЕДЖЕР', 
    'АССИСТЕНТ', 'ДИРЕКТОЛОГ', 'СЕКРЕТАРЬ', 'СПЕЦИАЛИСТ ПОДДЕРЖКИ', 
    'КОНТЕНТ-МЕНЕДЖЕР', 'МОДЕРАТОР', 'HR-РЕКРУТЕР', 'ДИЗАЙНЕР БАННЕРОВ', 
    'ОПЕРАТОР ВВОДА ДАННЫХ', 'ДИСПЕТЧЕР', 'КОРРЕКТОР', 'ТЕЛЕМАРКЕТОЛОГ', 
    'СЕОШНИК', 'РЕТУШЕР', 'EMAIL-МАРКЕТОЛОГ', 'БУХГАЛТЕР (ПЕРВИЧКА)', 
    'QA-ТЕСТИРОВЩИК', 'ТРАНСКРИБАТОР', 'СЦЕНАРИСТ', 'МЛАДШИЙ АНАЛИТИК', 
    'МЕНЕДЖЕР ЧАТОВ', 'АДМИНИСТРАТОР МАГАЗИНА', 'ТАБЕЛЬЩИК', 'МАРКЕТОЛОГ',
    'МЕНЕДЖЕР ПО ПРОДАЖАМ', 'ПОМОЩНИК РУКОВОДИТЕЛЯ'
  ];

  const styledProfessions = professions.map((p, i) => ({
    text: p,
    size: i % 3 === 0 ? '1.5rem' : (i % 2 === 0 ? '1.1rem' : '1.3rem'),
    color: i % 4 === 0 ? 'var(--neon-red)' : (i % 5 === 0 ? 'var(--neon-cyan)' : '#888'),
    opacity: i % 4 === 0 ? 0.9 : 0.6,
    duration: 2 + (i % 3) * 0.5 + (i % 2) * 0.2,
    delay: (i % 5) * 0.2
  }));

  return (
    <section className="professions-cloud-section" style={{ padding: '80px 20px', backgroundColor: 'transparent', position: 'relative', zIndex: 1 }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h3 className="mono text-red" style={{ fontSize: '1.2rem', letterSpacing: '4px', marginBottom: '15px' }}>[ НЕИЗБЕЖНАЯ РЕАЛЬНОСТЬ ]</h3>
        <p className="mono" style={{ color: '#aaa', fontSize: '1.1rem', textTransform: 'uppercase' }}>Эти профессии навсегда удаляются из штатного расписания</p>
      </div>
      
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '15px', 
        maxWidth: '1000px', 
        margin: '0 auto' 
      }}>
        {styledProfessions.map((item, i) => (
          <motion.div
            key={i}
            className="mono"
            animate={{ 
              x: [0, -1.5, 1.5, -1, 0, 1, 0],
              y: [0, 1, -1.5, 0, -1, 1.5, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: item.duration, 
              delay: item.delay,
              ease: "linear" 
            }}
            style={{
              padding: '10px 20px',
              fontSize: item.size,
              color: item.color,
              textDecoration: 'line-through',
              opacity: item.opacity,
              border: item.color === 'var(--neon-red)' ? '1px solid rgba(255, 10, 10, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              background: 'transparent',
              textShadow: item.color === 'var(--neon-red)' ? '0 0 8px rgba(255, 10, 10, 0.5)' : (item.color === 'var(--neon-cyan)' ? '0 0 8px rgba(10, 255, 255, 0.5)' : 'none')
            }}
          >
            {item.text}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
`;

// using a start and end finding mechanism because regex with multiline can be tricky in large files
const startIdx = content.indexOf('const DeadProfessionsCloud = () => {');
if (startIdx !== -1) {
    let endIdx = content.indexOf('export default function App() {');
    if (endIdx !== -1) {
        content = content.substring(0, startIdx) + newComponent + content.substring(endIdx);
        fs.writeFileSync('src/App.jsx', content, 'utf8');
        console.log("Successfully redesigned cloud.");
    } else {
        console.log("Could not find end of DeadProfessionsCloud.");
    }
} else {
    console.log("Could not find start of DeadProfessionsCloud.");
}
