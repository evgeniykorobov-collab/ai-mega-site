const fs = require('fs');

try {
    let f = fs.readFileSync('src/App.jsx','utf8');
    const startIdx = f.indexOf('fullDesc: "Беспрецедентный');
    const endIdx = f.indexOf('{/* Resume Section / Architect Profiling */}');
    console.log("Start:", startIdx, "End:", endIdx);
    
    if (startIdx > -1 && endIdx > -1) { 
        const fix = `               fullDesc: "Беспрецедентный уровень контроля. Алгоритму можно прописать мельчайшие детали характера, тона голоса и корпоративной этики.",
               result: "Идеальный сотрудник, который никогда не сомневается и не ошибается."
            }
          ].map((benefit, idx) => (
             <motion.div key={idx} className="flow-node" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}>
                <div className="flow-content">
                  <div className="hud-panel">
                    <div className="mono mb-2" style={{ color: 'var(--neon-cyan)', fontSize: '0.9rem', letterSpacing: '2px' }}>// {benefit.tag}</div>
                    <h3 className="syncopate mb-2" style={{ fontSize: '1.4rem' }}>{benefit.title}</h3>
                    <p className="mono" style={{ color: '#ccc', fontSize: '1.1rem' }}>{benefit.desc}</p>
                    <p className="mono" style={{ color: '#888', fontSize: '0.9rem', marginTop: '15px' }}>{benefit.fullDesc}</p>
                    <div className="mono text-cyan" style={{ fontSize: '0.95rem', marginTop: '15px', fontWeight: 'bold' }}>[ РЕЗУЛЬТАТ: {benefit.result} ]</div>
                  </div>
                </div>
                <div className="flow-center-pulse"></div>
                <div className="flow-empty"></div>
             </motion.div>
          ))}
        </div>
      </section>

      {/* Resume Section / Architect Profiling */}`;
      
        f = f.substring(0, startIdx) + fix + f.substring(endIdx + '{/* Resume Section / Architect Profiling */}'.length);
        fs.writeFileSync('src/App.jsx', f);
        console.log('Fixed successfully');
    } else {
        console.log("Could not find boundaries");
    }
} catch(e) {
    console.log(e);
}
