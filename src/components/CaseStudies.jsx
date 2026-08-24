import React from 'react';
import { motion } from 'framer-motion';

const cases = [
  {
    tag: 'CASE_01',
    company: 'ООО «ГЕРМЕС»',
    type: 'B2B-ПОСТАВЩИК',
    desc: 'Полная автоматизация ценообразования и клиентского сервиса',
    results: [
      'Автоматическая рассылка прайс-листов с сайта',
      'Бот для отправки прайсов и выставления счетов',
      'Сбор информации о клиентах и ведение базы',
      'Автоматические рассылки и уведомления об акциях',
      'Динамическое обновление и формирование прайсов',
    ],
    impact: 'Полный цикл от заявки до счёта — без участия человека. Экономия 120+ часов в месяц.',
    icon: 'M4 4h2v16H4zm4 0h4v16H8zm6 0h2v16h-2zm4 0h2v16h-2z',
  },
  {
    tag: 'CASE_02',
    company: 'АЛЕКСАНДР КЛЕЦКИЙ',
    type: 'ЭКСПЕРТ / КОНСУЛЬТАНТ',
    desc: 'Цифровизация экспертной практики и монетизация знаний',
    results: [
      'Цифровизация аудиолекций и организация базы знаний',
      'Ведение базы клиентов и их результатов',
      'Прозрачная монетизация всех процессов',
      'Клиентский и админский бот с векторной базой знаний',
      'Привязка бота к системе оплаты',
    ],
    impact: 'Из разрозненных записей — в работающую цифровую экосистему с автооплатой.',
    icon: 'M12 3c-4.97 0-9 4.03-9 9 0 3.16 1.63 6.13 4 7.92V21a1 1 0 001 1h6a1 1 0 001-1v-1.08c2.37-1.79 4-4.76 4-7.92 0-4.97-4.03-9-9-9zM9 22H7v-2h2v2zm6 0h-2v-2h2v2z',
  },
  {
    tag: 'PRODUCT_01',
    company: 'AI PRICE MANAGER',
    type: 'ГОТОВЫЙ ПРОДУКТ',
    desc: 'Коробочное решение для автоматизации прайсов и счетов',
    results: [
      'Автоматическое формирование и рассылка прайс-листов',
      'Выставление счетов через бота за секунды',
      'Уведомления клиентов об акциях и обновлениях',
      'Ведение клиентской базы с историей заказов',
      'Готов к внедрению за 3-5 дней',
    ],
    impact: 'Из кейса «Гермес» — в тиражируемый продукт. Подходит любому B2B-бизнесу.',
    icon: 'M12 2l3 6 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1 3-6z',
    isProduct: true,
  },
];

export default function CaseStudies() {
  return (
    <section id="cases" style={{ paddingTop: '80px', paddingBottom: '80px', position: 'relative', zIndex: 10 }}>
      <h2 className="mono text-cyan" style={{ fontSize: '1.7rem', letterSpacing: '5px', marginBottom: '60px', textShadow: 'var(--glow-cyan)', textAlign: 'center' }}>
        [ ПОДТВЕРЖДЁННЫЕ РЕЗУЛЬТАТЫ ]
      </h2>

      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {cases.map((c, i) => (
          <motion.div
            key={i}
            className={`terminal-panel ${c.isProduct ? '' : ''}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            style={c.isProduct ? { border: '1px solid var(--neon-cyan)', boxShadow: '0 0 20px rgba(34, 211, 238, 0.15)' } : {}}
          >
            <div className="terminal-panel-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div className="terminal-dot" style={{ background: '#ff5f56' }}></div>
                <div className="terminal-dot" style={{ background: '#ffbd2e' }}></div>
                <div className="terminal-dot" style={{ background: '#27c93f' }}></div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {c.isProduct && (
                  <span className="mono" style={{ fontSize: '0.65rem', background: 'var(--neon-cyan)', color: 'var(--bg-color)', padding: '2px 8px', letterSpacing: '1px', fontWeight: 'bold' }}>
                    ГОТОВЫЙ ПРОДУКТ
                  </span>
                )}
                <div className="mono" style={{ fontSize: '0.65rem', opacity: 0.5, color: 'var(--neon-cyan)', letterSpacing: '0.05em' }}>
                  [{c.tag}]
                </div>
              </div>
            </div>

            <div className="terminal-body" style={{ padding: '25px 30px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--neon-cyan)" style={{ flexShrink: 0, filter: 'drop-shadow(0 0 5px rgba(34, 211, 238,0.5))' }}>
                  <path d={c.icon} />
                </svg>
                <div>
                  <div className="mono" style={{ fontSize: '1.4rem', color: 'var(--text-primary)', letterSpacing: '2px', fontWeight: 'bold' }}>
                    {c.company}
                  </div>
                  <div className="mono" style={{ fontSize: '0.8rem', color: 'var(--neon-cyan)', opacity: 0.8, marginTop: '2px' }}>
                    {c.type}
                  </div>
                </div>
              </div>

              <p className="mono" style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '20px', lineHeight: '1.6' }}>
                &gt; {c.desc}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '8px', marginBottom: '20px' }}>
                {c.results.map((r, j) => (
                  <div key={j} className="mono" style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    padding: '8px 12px',
                    background: 'var(--accent-bg)',
                    border: '1px solid var(--accent-border)',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span style={{ color: 'var(--neon-cyan)', flexShrink: 0 }}>&#x2713;</span>
                    {r}
                  </div>
                ))}
              </div>

              <div style={{
                background: 'var(--accent-bg-medium)',
                borderLeft: '3px solid var(--neon-cyan)',
                padding: '12px 15px',
                marginTop: '10px'
              }}>
                <span className="mono text-cyan" style={{ fontSize: '0.85rem' }}>[ РЕЗУЛЬТАТ ]: </span>
                <span className="mono" style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>{c.impact}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
