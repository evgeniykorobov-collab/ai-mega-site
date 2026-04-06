import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');

// The block to replace: from <section className="hyper-pain-section" to its closing </section>
const searchRegex = /\{\/\* Hyper-Pain Section \*\/\}\s*<section className="hyper-pain-section"[\s\S]*?<\/section>/g;

const newHyperPain = `{/* Hyper-Pain Section */}
      <section className="hyper-pain-section" style={{ position: 'relative', padding: '150px 20px', backgroundColor: '#000', display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '700px', width: '100%', textAlign: 'left' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="mono text-gray"
            style={{ fontSize: '1.25rem', lineHeight: '1.9' }}
          >
            <p style={{ marginBottom: '2rem' }}>
              Ты смотришь на очередную задачу и думаешь: <span className="text-red">«Какого хера я вообще должен это делать? Почему мне приходится рутинно заниматься этой херней?»</span>
            </p>

            <p style={{ marginBottom: '2rem' }}>
              Когда-то сюда привело вдохновение.<br/>
              Желание сделать что-то новое, полезное.<br/>
              Почувствовать свое предназначение, показать свой стиль, свой вайб.
            </p>

            <p style={{ marginBottom: '2rem' }}>
              Но в потоке одинаковых операций, бюрократии, волокиты и разборок с этим всем мы <span className="text-red">теряем саму суть игры</span>.
            </p>

            <p style={{ marginBottom: '2rem' }}>
              Раньше автоматизировать всё это было слишком долго и сложно.<br/>
              Сейчас пришло время создания абсолютных ИИ-инструментов. За минимально сжатые сроки мы внедряем максимум функций.
            </p>

            <p style={{ marginBottom: '3rem', fontSize: '1.5rem', color: '#fff' }}>
              Цель — освободиться и быть счастливым. Появится время на то, что изначально сюда привело.
            </p>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              viewport={{ once: true }}
              style={{ borderLeft: '2px solid var(--neon-cyan)', paddingLeft: '20px' }}
            >
              <p style={{ color: 'var(--neon-cyan)', fontSize: '1.4rem' }}>
                Я предлагаю сыграть в другую игру.<br/>
                Потому что на этом поле есть куда более интересные задачи, вкусные бонусы и яркие победы.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>`;

if (searchRegex.test(content)) {
    content = content.replace(searchRegex, newHyperPain);
    fs.writeFileSync('src/App.jsx', content, 'utf8');
    console.log('Successfully replaced hyper-pain section with a cleaner version.');
} else {
    console.log('Could not find hyper-pain section to replace.');
}
