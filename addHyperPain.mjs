import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');

const hyperPainSection = `
      {/* Hyper-Pain Section */}
      <section className="hyper-pain-section" style={{ position: 'relative', padding: '120px 20px', backgroundColor: '#050505', display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}>
        <motion.div
          className="cyber-glow-bg danger-pulse"
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(255,10,10,0.15) 0%, rgba(0,0,0,0) 70%)', zIndex: 0 }}
        />
        
        <div style={{ maxWidth: '800px', width: '100%', zIndex: 1, position: 'relative', textAlign: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="glitch-text text-red" style={{ fontSize: '3rem', marginBottom: '2rem', textTransform: 'uppercase' }}>Какого хера я вообще это делаю?</h2>
          </motion.div>

          <div className="mono text-gray" style={{ fontSize: '1.2rem', lineHeight: '1.8', textAlign: 'left', background: 'rgba(10, 0, 0, 0.6)', border: '1px solid var(--neon-red)', padding: '40px', borderRadius: '8px', boxShadow: '0 0 30px rgba(255, 0, 0, 0.1)' }}>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ marginBottom: '1.5rem' }}>
              Ты смотришь на очередную таблицу и думаешь: <strong>«Зачем мне эта рутинная херня? Почему я делаю то, что можно автоматизировать?»</strong>
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} style={{ marginBottom: '1.5rem' }}>
              Изначально тебя сюда привело вдохновение. Желание создать что-то новое, проявить себя, показать свой вайб и свой стиль.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }} style={{ marginBottom: '1.5rem', color: 'var(--neon-red)' }}>
              Но вместо этого ты тонешь в потоке одинаковых операций. Бюрократия. Волокита. Ошибки. Мы теряем суть игры в разборках с этим мусором.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.8 }} style={{ marginBottom: '1.5rem' }}>
              Когда-то автоматизация была долгой и сложной. Писать код, связывать сервисы... <strong>Сейчас всё иначе.</strong> Пришло время создания абсолютных ИИ-инструментов в кратчайшие сроки. 
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1.0 }} style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--neon-cyan)', marginTop: '2rem' }}>
              Пора освободиться. На этом поле есть куда более интересные задачи, вкусные бонусы и яркие победы. 
              <br /><br />
              Сыграем в <span className="syncopate" style={{ color: 'var(--neon-red)' }}>ИНТЕРЕСНУЮ ИГРУ?</span>
            </motion.p>
          </div>
        </div>
      </section>
`;

const painSectionEnd = content.indexOf('</section>', content.indexOf('<section id="pains"'));

if (painSectionEnd !== -1) {
    const splitIndex = painSectionEnd + '</section>'.length;
    
    // Make sure we didn't already insert it
    if (!content.includes('hyper-pain-section')) {
        const newContent = content.substring(0, splitIndex) + '\n' + hyperPainSection + '\n' + content.substring(splitIndex);
        fs.writeFileSync('src/App.jsx', newContent, 'utf8');
        console.log('Hyper-pain section added successfully.');
    } else {
        console.log('Hyper-pain section already exists.');
    }
} else {
    console.log('Could not find pains section to insert after.');
}
