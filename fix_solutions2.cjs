const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Rewrite metrics array
const oldMetrics = `                    {[
                        {v: '350', label: 'ЧЕЛОВЕК В УПРАВЛЕНИИ'},
                        {v: '1.2%', label: 'УДЕРЖАНИЕ (ОТТОК С 7.5%)'},
                        {v: '100s', label: 'ВРЕМЯ ОБСЛУЖИВАНИЯ (С 120s)'},
                        {v: '85%', label: 'УДОВЛЕТВОРЕННОСТЬ (С 65%)'},
                        {v: '150+ МЛН', label: 'B2B СДЕЛОК (СУММАРНО)'},
                        {v: '650+', label: 'КОНТРАКТОВ ЗАКЛЮЧЕНО'},
                        {v: '36', label: 'РЕГИОНОВ В УПРАВЛЕНИИ'},
                        {v: '3', label: 'КОМПАНИЙ (С НУЛЯ)'}
                    ]`;
const newMetrics = `                    {[
                        {v: '350', label: 'ЧЕЛОВЕК В УПРАВЛЕНИИ'},
                        {v: '150+ МЛН', label: 'B2B СДЕЛОК (СУММАРНО)'},
                        {v: '650+', label: 'КОНТРАКТОВ ЗАКЛЮЧЕНО'},
                        {v: '36', label: 'РЕГИОНОВ В УПРАВЛЕНИИ'},
                        {v: '3', label: 'КОМПАНИЙ (С НУЛЯ)'}
                    ]`;
code = code.replace(oldMetrics, newMetrics);

const oldSolutionsStartStr = `        <div id="ai-solutions" className="flow-container" style={{ paddingTop: '50px' }}>`;
const aiSolutionsEndStr = `        </div>
      </section>`;

let replacement = `        <div id="ai-solutions" className="flow-container" style={{ paddingTop: '50px' }}>
          <div className="flow-line" style={{ top: '0', bottom: '-10vmax' }}></div>
          
          {[
            { 
               id: "BEN_01", title: "СКОРОСТЬ И ПРОПУСКНАЯ СПОСОБНОСТЬ", 
               desc: "ИИ отвечает за секунды, обрабатывая тысячи заявок параллельно.",
               fullDesc: "Система не знает усталости, не допускает опечаток и обрабатывает запросы с точностью совершенной машины. Каждый разговор и клик контролируется 24/7.",
               result: "Ноль упущенных заявок, мгновенная реакция и перехват горячих лидов у конкурентов."
            },
            { 
               id: "BEN_02", title: "ТОТАЛЬНЫЙ КОНТРОЛЬ И СИСТЕМНОСТЬ", 
               desc: "Никто не забудет перезвонить. Никто не потеряет клиента.",
               fullDesc: "Алгоритму можно прописать жесткий регламент фоллоу-апов. Система стабильно дожимает сделки по вашему сценарию изо дня в день.",
               result: "Абсолютный контроль: 100% звонков разобраны на ошибки и нужные метрики."
            },
            { 
               id: "BEN_03", title: "ЭКСТРЕМАЛЬНОЕ СНИЖЕНИЕ ФОТ", 
               desc: "Бизнес становится легким и маржинальным.",
               fullDesc: "Не нужно платить налоги, оплачивать больничные, арендовать офисы и закупать технику.",
               result: "Один ИИ-агент обходится в 10-20 раз дешевле штатного сотрудника."
            },
            { 
               id: "BEN_04", title: "РАДАР АНАЛИТИКИ 24/7", 
               desc: "Полная прозрачность метрик без задержек.",
               fullDesc: "Все звонки и переписки автоматически анализируются на лету. Сводки готовы в реальном времени, а не в конце месяца.",
               result: "Мгновенное принятие управленческих решений на базе 100% точных данных."
            },
            { 
               id: "BEN_05", title: "ТОНКОСТЬ И ГЛУБИНА НАСТРОЕК", 
               desc: "Беспрецедентный уровень кастомизации.",
               fullDesc: "Нейросеть можно настроить так, как невозможно настроить живого человека. Тон голоса, характер поведения и строгие рамки регламентов.",
               result: "Идеальный сотрудник, который никогда не сомневается и не ошибается."
            },
            { 
               id: "BEN_06", title: "БЕСКОНЕЧНОЕ МАСШТАБИРОВАНИЕ", 
               desc: "Рост компании без роста операционного хаоса.",
               fullDesc: "Бизнес вырастет в 10 раз? Вам не придется искать помещения и выстраивать новые отделы. Система масштабируется линейно.",
               result: "Достаточно увеличить серверные мощности в два клика."
            }
          ].map((benefit, i) => {
            const isLeft = i % 2 !== 0;
            return (
              <motion.div 
                 key={i} 
                 className="flow-node" 
                 style={{ position: 'relative' }}
                 initial={{ opacity: 0, y: 50 }} 
                 whileInView={{ opacity: 1, y: 0 }} 
                 viewport={{ once: true, margin: "-50px" }}
              >
                  <div className="flow-content terminal-panel" style={{ position: 'relative' }}>
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: "url(/bg_" + benefit.id.toLowerCase() + ".png)",
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        opacity: 0.18,
                        zIndex: 0,
                        borderRadius: '6px',
                        maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,1) 85%)',
                        WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,1) 85%)'
                      }}></div>
                      
                      <div className="terminal-panel-header" style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <div className="terminal-dot" style={{background: '#ff5f56'}}></div>    
                              <div className="terminal-dot" style={{background: '#ffbd2e'}}></div>    
                              <div className="terminal-dot" style={{background: '#27c93f'}}></div>    
                          </div>
                          <div className="mono" style={{ fontSize: '0.65rem', opacity: 0.5, color: 'var(--neon-cyan)', letterSpacing: '0.05em' }}>[MODULE_UPGRADE: {benefit.id}]</div>
                      </div>
                      
                      <div className="terminal-body" style={{ position: 'relative', zIndex: 1, textShadow: '0 0 10px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.9)', minHeight: '260px', padding: '40px 30px' }}>
                          <div className="mono mb-2" style={{ fontSize: '1.6rem', fontWeight: 'bold', color: 'var(--neon-cyan)' }}>&gt; {benefit.title}</div>
                          <p className="mono" style={{ color: 'var(--neon-cyan)', fontSize: '1.1rem', marginTop: '15px' }}>&gt; {benefit.desc}</p>
                          <p className="mono" style={{ color: 'var(--neon-cyan)', fontSize: '0.9rem', marginTop: '15px', opacity: 0.8, lineHeight: '1.5' }}>{benefit.fullDesc}</p>
                          <p className="mono" style={{ color: '#fff', fontSize: '0.92rem', marginTop: '15px', opacity: 1, lineHeight: '1.5', textShadow: '0 0 5px rgba(0,240,255,0.7)' }}>[ РЕЗУЛЬТАТ ]: {benefit.result}</p>
                      </div>
                  </div>
                  <div className="flow-center-pulse"></div>
                  <div className="flow-empty"></div>
              </motion.div>
            );
          })}
`;

const startIndex = code.indexOf(oldSolutionsStartStr);
const endIndex = code.indexOf(aiSolutionsEndStr, startIndex) + aiSolutionsEndStr.length;

if(startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
    code = code.substring(0, startIndex) + replacement + "\n" + aiSolutionsEndStr + code.substring(endIndex);
    fs.writeFileSync('src/App.jsx', code);
    console.log("Successfully updated metrics and ai-solutions section.");
} else {
    console.log("Could not find ai-solutions boundaries! Start:", startIndex, "End:", endIndex);
}
