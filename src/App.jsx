import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fingerprint } from 'lucide-react';
import './index.css';
import FloatingTelegramButton from './components/FloatingTelegramButton';
import CaseStudies from './components/CaseStudies';
import CTAForm from './components/CTAForm';

const PixelFunnel = () => (
  <svg className="pixel-bg" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1h14v2h-2v2h-2v2h-2v2h-2v4h-2v-4h-2v-2h-2v-2h-2v-2h2z" />
    <rect x="7" y="14" width="2" height="2" />
  </svg>
);

const PixelCog = () => (
  <svg className="pixel-bg" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 0h4v2h2v2h2v2h2v4h-2v2h-2v2h-2v2h-4v-2h-2v-2h-2v-2h-2v-4h2v-2h2v-2h2v-2zm-1 5h6v6h-6v-6z" />
  </svg>
);

const PixelChart = () => (
  <svg className="pixel-bg" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="9" width="4" height="7" />
    <rect x="6" y="4" width="4" height="12" />
    <rect x="11" y="0" width="4" height="16" />
    <path d="M5 6 L 8 4 L 11 1 V 3 L 8 6 Z" />
  </svg>
);

const PixelChat = () => (
  <svg className="pixel-bg" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2v9h4l3 3v-3h5v-9H2zm2 4h2v2H4V6zm4 0h2v2H8V6zm4 0h2v2h-2V6z" />
  </svg>
);

const PixelBlindChart = () => (
  <svg className="pixel-bg" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="1" width="6" height="2" />
    <rect x="3" y="2" width="2" height="2" />
    <rect x="11" y="2" width="2" height="4" />
    <rect x="9" y="6" width="2" height="2" />
    <rect x="7" y="8" width="2" height="3" />
    <rect x="7" y="13" width="2" height="2" />
  </svg>
);

const PixelPeopleWall = () => (
  <svg className="pixel-bg" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="7" y="1" width="2" height="2" />
    <rect x="6" y="4" width="4" height="4" />
    <rect x="2" y="7" width="2" height="2" />
    <rect x="1" y="10" width="4" height="4" />
    <rect x="12" y="7" width="2" height="2" />
    <rect x="11" y="10" width="4" height="4" />
  </svg>
);

const PixelHumanError = () => (
  <svg className="pixel-bg" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="1" width="4" height="4" />
    <rect x="3" y="6" width="8" height="6" />
    <rect x="4" y="13" width="2" height="3" />
    <rect x="8" y="13" width="2" height="3" />
    <rect x="12" y="1" width="1" height="5" fill="var(--neon-red)" />
    <rect x="10" y="3" width="5" height="1" fill="var(--neon-red)" />
  </svg>
);

const CyberNav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [theme, setTheme] = React.useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <nav className={`cyber-nav ${scrolled ? 'nav-scrolled' : ''}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
      
      {/* Restored Fingerprint Logo */}
      <div className="nav-logo syncopate" style={{ flexWrap: 'nowrap', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer', zIndex: 10 }} onClick={() => window.scrollTo(0,0)}>
         <Fingerprint size={42} strokeWidth={1.5} color="var(--neon-cyan)" style={{ filter: 'var(--icon-glow-filter, drop-shadow(0 0 8px rgba(34, 211, 238,0.8)))' }} />
         <span style={{ fontSize: '1.4rem', letterSpacing: '2px' }}>НЕЙРО<span className="text-cyan">АКТИВ</span></span>
      </div>

      <div className="nav-links mono" style={{ display: 'flex', justifyContent: 'center', position: 'static', transform: 'none', gap: '10px', zIndex: 10 }}>
          <a href="#pains" style={{whiteSpace:'nowrap'}}>[ БОЛИ БИЗНЕСА ]</a>
          <div className="nav-divider"></div>
          <a href="#reality" style={{whiteSpace:'nowrap'}}>[ РЕАЛЬНОСТЬ ]</a>
          <div className="nav-divider"></div>
          <a href="#solutions" style={{whiteSpace:'nowrap'}}>[ РЕШЕНИЯ ]</a>
          <div className="nav-divider"></div>
          <a href="#cases" style={{whiteSpace:'nowrap'}}>[ КЕЙСЫ ]</a>
          <div className="nav-divider"></div>
          <a href="#humanization" style={{whiteSpace:'nowrap'}}>[ ГУМАНИЗАЦИЯ ]</a>
          <div className="nav-divider"></div>
          <a href="#founder" style={{whiteSpace:'nowrap'}}>[ АРХИТЕКТОР ]</a>
          <div className="nav-divider"></div>
          <a href="#audit" className="targetable-prof" style={{textDecoration:'none', whiteSpace:'nowrap'}}>[ АУДИТ ]</a>
      </div>

      <div className="mono" style={{ whiteSpace: 'nowrap', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '10px', zIndex: 10 }}>
         <div onClick={toggleTheme} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginRight: '10px', opacity: 0.8, transition: 'all 0.3s' }} title={theme === 'dark' ? 'Switch to light' : 'Switch to dark'}>
           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--neon-cyan)" strokeWidth="2">
             {theme === 'dark' ? (
               <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
             ) : (
               <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
             )}
           </svg>
           <span className="nav-right-label" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>
             {theme === 'dark' ? '[ LIGHT ]' : '[ DARK ]'}
           </span>
         </div>
      </div>
    </nav>
  );
};


const DeadProfessionsCloud = () => {
  const [killedBoxes, setKilledBoxes] = React.useState({});

  const playLaserSound = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'square';
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 0.15);
      
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch (e) { console.error('Audio play failed', e) }
  };

  const professions = [
    // Top (short strings)
    'КОУЧ', 'СМЕТЧИК', 'АНАЛИТИК', 'СЕОШНИК', 'СЕКРЕТАРЬ', 'РЕТУШЕР', 'КОРРЕКТОР',
    // Mid-top (medium strings)
    'ТАБЕЛЬЩИК', 'ПЕРЕВОДЧИК', 'ДИСПЕТЧЕР', 'МОДЕРАТОР', 'КОПИРАЙТЕР', 'МАРКЕТОЛОГ',
    // Middle (longest strings)
    'ВРАЧ-КОНСУЛЬТАНТ', 'ОПЕРАТОР ВВОДА ДАННЫХ', 'МЕНЕДЖЕР ПО ПРОДАЖАМ', 'ОПЕРАТОР БАНКА',
    'МЕНЕДЖЕР ПО СНАБЖЕНИЮ', 'ПОМОЩНИК РУКОВОДИТЕЛЯ', 'АДМИНИСТРАТОР МАГАЗИНА', 'СПЕЦИАЛИСТ ПОДДЕРЖКИ', 'БУХГАЛТЕР (ПЕРВИЧКА)',
    // Mid-bottom (medium strings)
    'МЕНЕДЖЕР ЧАТОВ', 'ДИЗАЙНЕР БАННЕРОВ', 'ОПЕРАТОР КОЛЛ-ЦЕНТРА', 'HR-РЕКРУТЕР', 'ТЕЛЕМАРКЕТОЛОГ', 'КОНТЕНТ-МЕНЕДЖЕР',
    // Bottom (short/medium strings)
    'ДИРЕКТОЛОГ', 'SMM-МЕНЕДЖЕР', 'СЦЕНАРИСТ', 'АССИСТЕНТ', 'EMAIL-МАРКЕТОЛОГ', 'АСЕССОР'
  ];

  const handleKill = (idx) => {
    if (killedBoxes[idx]) return;
    const currentKilledCount = Object.keys(killedBoxes).length;
    // Don't kill it if it's the very last runaway one, unless they super-clicked it quickly
    if (currentKilledCount === professions.length - 1) {
       // Optionally play a different sound here
       playLaserSound(); 
       setKilledBoxes(prev => ({ ...prev, [idx]: true }));
       return;
    }
    playLaserSound();
    setKilledBoxes(prev => ({ ...prev, [idx]: true }));
  };

  const styledProfessions = professions.map((p, i) => ({
    text: p,
    size: i % 3 === 0 ? '1.5rem' : (i % 2 === 0 ? '1.1rem' : '1.3rem'),
    color: i % 4 === 0 ? 'var(--neon-red)' : (i % 5 === 0 ? 'var(--neon-cyan)' : 'var(--text-dim)'),
    opacity: i % 4 === 0 ? 0.9 : 0.6,
    duration: 2 + (i % 3) * 0.5 + (i % 2) * 0.2,
    delay: (i % 5) * 0.2
  }));

  return (
    <section id="reality" className="professions-cloud-section" style={{ paddingTop: '180px', paddingBottom: '120px', paddingLeft: '20px', paddingRight: '20px', backgroundColor: 'transparent', position: 'relative', zIndex: 1 }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h3 className="mono text-cyan" style={{ fontSize: '1.7rem', letterSpacing: '5px', marginBottom: '15px', textShadow: 'var(--glow-cyan)' }}>[ НЕИЗБЕЖНАЯ РЕАЛЬНОСТЬ ]</h3>
        <p className="mono" style={{ color: 'var(--neon-cyan)', opacity: 0.7, fontSize: '1.2rem', textTransform: 'uppercase' }}>Эти профессии неизбежно исчезнут в течение 3-5 лет</p>
      </div>
      
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '15px', 
        maxWidth: '1000px', 
        margin: '0 auto' 
      }}>
        {styledProfessions.map((item, i) => {
          const isKilled = killedBoxes[i];
          
          return (
          <button
            key={i}
            type="button"
            className={`mono profession-tag targetable-prof ${isKilled ? 'killed' : ''}`}
            onClick={() => handleKill(i)}
            aria-pressed={isKilled}
            aria-label={isKilled ? `${item.name} — заменено` : `Заменить: ${item.name}`}
            style={{
              padding: '10px 20px',
              fontSize: item.size,
              zIndex: 1,
              color: isKilled ? 'transparent' : item.color,
              opacity: isKilled ? 1 : item.opacity,
              border: item.color === 'var(--neon-red)' ? '1px solid var(--danger-border)' : '1px solid var(--border-subtle)',
              borderRadius: '8px',
              background: 'transparent',
              textShadow: isKilled ? 'none' : (item.color === 'var(--neon-red)' ? '0 0 8px rgba(255, 10, 10, 0.5)' : (item.color === 'var(--neon-cyan)' ? '0 0 8px rgba(10, 255, 255, 0.5)' : 'none'))
            }}
          >
            {item.text}
          </button>
        )})}
      </div>
    </section>
  );
};


const AgentProgressBar = ({ delay }) => {
  const [progress, setProgress] = React.useState(0);
  const [started, setStarted] = React.useState(false);

  React.useEffect(() => {
    let t;
    if (started) {
       t = setInterval(() => {
         setProgress(p => {
            if (p >= 100) { clearInterval(t); return 100; }
            return p + 4;
         });
       }, 15);
    }
    return () => clearInterval(t);
  }, [started]);

  return (
    <div style={{ marginTop: '0px', width: '100%' }}>
       <div style={{ display: 'flex', justifyContent: 'flex-end', fontSize: '0.65rem', color: 'var(--neon-cyan)', opacity: 0.8, marginBottom: '2px', letterSpacing: '1px' }} className="mono">
         <span>{progress}%</span>
       </div>
       <div style={{ height: '3px', background: 'var(--accent-bg-hover)', width: '100%', borderRadius: '2px', overflow: 'hidden' }}>
         <motion.div
           initial={{ width: '0%' }}
           whileInView={{ width: '100%' }}
           viewport={{ once: true }}
           onViewportEnter={() => {
              setTimeout(() => setStarted(true), delay * 1000);
           }}
           transition={{ delay: delay, duration: 0.4, ease: "easeOut" }}
           style={{ height: '100%', background: 'var(--neon-cyan)', boxShadow: '0 0 8px var(--neon-cyan)' }}
         />
       </div>
    </div>
  );
};



const UnifiedSystemBoot = () => {
    const [expandedAgentId, setExpandedAgentId] = React.useState(null);
    const agents = [
            { id: 1, tag: "MOD_01", title: 'ИИ-ДИРЕКТОЛОГ', desc: 'Управление РК', 
              fullDesc: 'Автоматически собирает семантику, пишет объявления и запускает рекламные кампании в Яндекс.Директ. 24/7 корректирует ставки на основе ROI и отключает неэффективные площадки.', 
              result: 'Скликивание и ботовый трафик отсекаются до списания бюджета — площадки чистятся в реальном времени.', 
              icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20zm0 15a5 5 0 1 1 0-10 5 5 0 1 1 0 10zm0-7a2 2 0 1 0 0 4 2 2 0 1 0 0-4z' },
            { id: 2, tag: "MOD_02", title: 'ИИ-МАРКЕТОЛОГ', desc: 'Анализ ЦА и стратегий', 
              fullDesc: 'Глубокий парсинг аудитории конкурентов. Выясняет, кто является вашим целевым клиентом, где его искать и какие у него признаки. Создание эффективных стратегий привлечения на основе данных.', 
              result: 'Новые воронки запускаются быстрее, а решения по ним принимаются на данных о поведении, а не на догадках.', 
              icon: 'M12 2L2 22h20L12 2zm0 6l3 10H9l3-10z' },
            { id: 3, tag: "MOD_03", title: 'ИИ-ПРОДАВЕЦ', desc: 'Голосовые продажи', 
              fullDesc: 'Мы предварительно анализируем ваши переписки и звонки, чтобы воспроизвести ваш стиль. Клиент даже не поймет, что общается с роботом. ИИ строго следует скрипту, дожимает сделки и виртуозно отрабатывает возражения.', 
              result: 'Круглосуточный обзвон без выгорания. Тотальный контроль качества звонков.', 
              icon: 'M2 2h4l1 5h15l-3 9H8L5 4H2V2zm6 16a2 2 0 1 0 0 4 2 2 0 1 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4z' },
            { id: 4, tag: "MOD_04", title: 'ИИ-СНАБЖЕНЕЦ', desc: 'Закупки и спецификации', 
              fullDesc: 'Парсинг спецификаций, автоматический подбор поставщиков, глубокий анализ рынка. Заказ продукции, логистика и жесткий контроль своевременной оплаты лицензий.', 
              result: 'Искоренение откатов. Максимально быстрая и дешевая закупка всего необходимого.', 
              icon: 'M2 4h14v10H2zm14 2h6v8h-6z M4 16a2 2 0 1 0 0 4 2 2 0 1 0 0-4zm12 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4z' },
            { id: 5, tag: "MOD_05", title: 'ИИ-АНАЛИТИК', desc: 'Парсинг Big Data', 
              fullDesc: 'Непрерывный свод данных из CRM, ERP, метрик и баз данных в единый пульт управления. Обнаружение скрытых аномалий в оттоке клиентов.', 
              result: 'Данные в реальном времени, а не в конце месяца.', 
              icon: 'M2 22V2h2v20H2zm6-8V2h4v12H8zm8-10v20h4V4h-4z' },
            { id: 6, tag: "MOD_06", title: 'ИИ-СЕОШНИК', desc: 'Семантическое ядро', 
              fullDesc: 'Анализ ТОП-10 выдачи Яндекса и Google. Быстрый сбор семантического ядра на 100к+ слов, кластеризация и выдача точных ТЗ для копирайтеров.', 
              result: 'Органический трафик начинает расти через месяц. Захват низкочастотных ниш.', 
              icon: 'M10 2a8 8 0 1 0 5 14.3l6 6 1.4-1.4-6-6A8 8 0 1 0 10 2zm0 14a6 6 0 1 1 0-12 6 6 0 1 1 0 12z' },
            { id: 7, tag: "MOD_07", title: 'ИИ-АССИСТЕНТ', desc: 'Обработка чатов', 
              fullDesc: 'Отвечает на рутинные письма, ведет расписание руководителей, напоминает о дедлайнах и систематизирует хаос из мессенджеров.', 
              result: 'Снимает с руководителя разбор рутины и возвращает часы на решения.', 
              icon: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm-1-9v4h4v-2h-2V9h-2z' },
            { id: 8, tag: "MOD_08", title: 'ИИ-РЕКРУТЕР', desc: 'Массовый скрининг', 
              fullDesc: 'Сбор резюме с карьерных сайтов, первичный обзвон кандидатов. ИИ проводит базовое интервью голосом и оценивает адекватность соискателя.', 
              result: 'Отсев идёт до собеседования: HR общаются только с релевантными кандидатами.', 
              icon: 'M12 12a5 5 0 1 0 0-10 5 5 0 1 0 0 10zm-7 8c0-3.9 5-6 7-6s7 2.1 7 6v2H5v-2z' },
            { id: 9, tag: "MOD_09", title: 'ИИ-СЦЕНАРИСТ', desc: 'Создание прогревов', 
              fullDesc: 'Умеет выстраивать нейро-воронки и сторителлинг для соцсетей. Генерирует письма для email-рассылок и сценарии прогревающих роликов.', 
              result: 'Снижение отписок от рассылок и взрывной рост вовлеченности подписчиков.', 
              icon: 'M3 3v18h18V3H3zm14 14H7v-2h10v2zm0-4H7v-2h10v2zm0-4H7V7h10v2z' },
            { id: 10, tag: "MOD_10", title: 'ИИ-СМЕТЧИК', desc: 'Калькуляция проектов', 
              fullDesc: 'Автоматический парсинг чертежей и заявок. Выдача готовой спецификации и расчета стоимости по актуальной базе цен без ошибок.', 
              result: 'Клиент получает коммерческое предложение за минуты, а не ждёт два дня.', 
              icon: 'M4 2h16v20H4V2zm4 4v4h8V6H8zm0 6v2h2v-2H8zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm-8 4v2h2v-2H8zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z' },
            { id: 11, tag: "MOD_11", title: 'МЛАДШИЙ БУХГАЛТЕР', desc: 'Счета и УПД', 
              fullDesc: 'Автоматическое формирование, выставление счетов клиентам и предоставление УПД без задержек. Идеальный порядок в базовой первичке.', 
              result: 'Нулевая вероятность ошибки ручного ввода. Моментальный документооборот.', 
              icon: 'M6 2H2v20h20V2h-4v6H6V2zm12 10H6v2h12v-2zm0 4H6v2h12v-2z M8 2h8v4H8V2z' },
            { id: 12, tag: "MOD_12", title: 'ИИ-КОПИРАЙТЕР', desc: 'Генерация SEO-текстов', 
              fullDesc: 'Пишет технически грамотные статьи по жестким алгоритмам анти-плагиата. Форматирует HTML, добавляет списки и ключевые слова.', 
              result: 'Сотни статей в месяц за копейки. Быстрая монополизация инфо-поля.', 
              icon: 'M3 4v16h18V4H3zm10 14H5v-2h8v2zm4-4H5v-2h12v2zm0-4H5V8h12v2z' },
            { id: 13, tag: "MOD_13", title: 'ИИ-САППОРТ', desc: 'Чат-поддержка 24/7', 
              fullDesc: 'Больше, чем чат-бот. Нейросеть отвечает в контексте документации компании так же глубоко, как Senior-специалист.', 
              result: 'Типовые обращения закрываются без человека, сложные уходят оператору с готовым контекстом.', 
              icon: 'M12 2a9 9 0 0 0-9 9v7h3v-6H4a7 7 0 0 1 14 0h-2v6h3v-7a9 9 0 0 0-9-9z M8 20h8v2H8v-2z' },
            { id: 14, tag: "MOD_14", title: 'ИИ-ЮРИСТ', desc: 'Договоры и документы', 
              fullDesc: 'Глубокий анализ документов, составление писем и правильное оформление бумаг по вашим шаблонам и примерам. Единственное, что нужно сделать человеку — сходить на почту и отправить.', 
              result: 'Больше никаких ошибок в оформлении. Экономия на in-house юристах и делопроизводителях.', 
              icon: 'M12 2L2 7h20L12 2zm0 6L4 12h16l-8-4zm-6 6v6h2v-6H6zm10 0v6h2v-6h-2z M2 20h20v2H2v-2z' },
            { id: 30, tag: "MOD_30", title: 'ИИ-ФИНДИР', desc: 'Анализ рентабельности',
              fullDesc: 'Собирает данные из всех выписок, ОФД и банков. Строит в реальном времени отчеты P&L, CashFlow, и Баланс. Выявляет нерентабельные узлы бизнеса и прогнозирует кассовые разрывы.',
              result: 'Прозрачная юнит-экономика и предупреждение о кассовом разрыве заранее, а не постфактум.',
              icon: 'M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-2.91-3.8V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z' },
            { id: 15, tag: "MOD_15", title: 'ИИ-СММ', desc: 'Автоматизация соцсетей', 
              fullDesc: 'Абсолютно всё можно автоматизировать: самостоятельное ведение групп, создание контента для соцсетей, настройка и рассылка через чат-ботов.', 
              result: 'Стабильный охват аудитории 24/7 без участия человека.', 
              icon: 'M16 4h4v4h-4z M4 16h4v4H4z M16 16h4v4h-4z M4 4h4v4H4z M9 6h6v2H9z M6 9h2v6H6z M16 9h2v6h-2z M9 16h6v2H9z' },
            { id: 16, tag: "MOD_16", title: 'ИИ-АСЕССОР', desc: 'Контроль коммуникаций', 
              fullDesc: 'Позволяет тотально прослушивать и анализировать все ваши коммуникации с клиентами. Каждый звонок и переписка будут изучены.', 
              result: 'Разбирается каждый звонок, а не выборка: ошибки скрипта и причины отказов видны по всему потоку.', 
              icon: 'M12 1v22M4 4l16 16M4 20L20 4M2 12h20' },
            { id: 17, tag: "MOD_17", title: 'ИИ-ТОВАРОВЕД', desc: 'Прайсовед и рассылки', 
              fullDesc: 'Автоматическое формирование прайсов, умная и регулярная актуализация цен, автоматическая наценка и массовая рассылка прайс-листов.', 
              result: 'Нулевая ошибка в спецификациях. Цены всегда соответствуют рынку.', 
              icon: 'M4 4h2v16H4zm4 0h4v16H8zm6 0h2v16h-2zm4 0h2v16h-2z' },
            { id: 18, tag: "MOD_18", title: 'ИИ-КЛАДОВЩИК', desc: 'Анализ складов', 
              fullDesc: 'Непрерывное цифровое ведение склада. Анализ оборачиваемости, прогнозирование дефицита остатков и логистический трекинг.', 
              result: 'Заказ формируется по фактическому расходу: неликвид не копится, ходовое не кончается.', 
              icon: 'M5 12h6v10H5z M13 12h6v10h-6z M9 2h6v9H9z' },
            { id: 19, tag: "MOD_19", title: 'ИИ-АРХИВАРИУС', desc: 'База знаний', 
              fullDesc: 'Систематизация документооборота, структурирование файлов и регламентов. Мгновенный цифровой поиск по всему корпоративному облаку.', 
              result: 'Сотрудники находят любой документ за секунды вместо часов.', 
              icon: 'M4 2h12l4 4v16H4V2zm11 1v4h4 M6 10h12v2H6zm0 4h12v2H6z' },
            { id: 20, tag: "MOD_20", title: 'ИИ-ТРЕНАЖЕР', desc: 'Обучение персонала', 
              fullDesc: 'Нейро-симулятор для стажеров. Отработка скриптов и нестандартных ситуаций в безопасной среде перед звонком реальному клиенту.', 
              result: 'Срок выхода новичка на плановые KPI сокращается вдвое.', 
              icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 18A8 8 0 1112 4a8 8 0 010 16zM8 10a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4z M12 16c-2 0-3.5-1-3.5-1s1.5-2 3.5-2 3.5 2 3.5 2-1.5 1-3.5 1z' },
            { id: 21, tag: "MOD_21", title: 'ИИ-СУФЛЕР', desc: 'Подсказки в эфире', 
              fullDesc: 'Работает прямо во время разговора менеджера с клиентом. Слушает звонок или читает чат и на лету предлагает идеальные ответы.', 
              result: 'Апсейл предлагается в момент, когда он уместен, а не когда менеджер вспомнил.', 
              icon: 'M2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 8c4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8 3.59 8 8 8zm-1-13h2v6h-2zm0 8h2v2h-2z' },
            { id: 22, tag: "MOD_22", title: 'ИИ-СУПЕРВАЙЗЕР', desc: 'Контроль митингов', 
              fullDesc: 'Соблюдение расписаний, автоматизация контроля за созвонами. Сборка текстов и саммари митингов, экспорт данных переговоров.', 
              result: 'Руководитель всегда знает, о чем говорили и какие задачи поставлены.', 
              icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v5H9z' },
            { id: 23, tag: "MOD_23", title: 'AI КРЕАТИВНЫЙ ДИРЕКТОР', desc: 'Генерация идей', 
              fullDesc: 'Мозговые штурмы с вашей командой. Генерирует маркетинговые ходы, нестандартные креативы и концепции продуктов за пару минут.', 
              result: 'Бесконечный поток свежих идей без выгорания и творческих кризисов.', 
              icon: 'M12 3c-4.97 0-9 4.03-9 9 0 3.16 1.63 6.13 4 7.92V21a1 1 0 001 1h6a1 1 0 001-1v-1.08c2.37-1.79 4-4.76 4-7.92 0-4.97-4.03-9-9-9zM9 22H7v-2h2v2zm6 0h-2v-2h2v2z' },
            { id: 24, tag: "MOD_24", title: 'ДИРЕКТОР РАЗВИТИЯ', desc: 'Анализ трендов', 
              fullDesc: 'Глубокий автоматизированный анализ конкурентов и мировых трендов. Разработка PR-стратегии и поиск ключевых векторов роста компании.', 
              result: 'Вы всегда на шаг впереди рынка, прогнозируя изменения спроса.', 
              icon: 'M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z' },
            { id: 25, tag: "MOD_25", title: 'ИИ-ВЕРСТАЛЬЩИК', desc: 'Браузерный робот', 
              fullDesc: 'Полная браузерная автоматизация: сам заходит в CMS, заводит тысячи товарных карточек и обновляет цены без API.', 
              result: 'Вся убивающая рутина по наполнению сайтов делегирована. Карточки заводятся мгновенно.', 
              icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 4v10h16V8H4zm6 2h8v2h-8v-2z' },
            { id: 26, tag: "MOD_26", title: 'ИИ-РУКОВОДИТЕЛЬ', desc: 'Оркестратор процессов', 
              fullDesc: 'Генеральный модуль ИИ. Контролирует работу всех остальных нейроских агентов, распределяет им задачи и присылает итоговый отчет владельцу.', 
              result: 'Полная автономность цифрового отдела. Собственник переходит в режим созерцания прибыли.', 
              icon: 'M12 2l3 6 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1 3-6z' },
            { id: 27, tag: "MOD_27", title: 'ИИ-АДАПТАТОР', desc: 'Онбординг новичков', 
              fullDesc: 'Интерактивный робот-наставник. Проводит новых сотрудников по всем внутренним регламентам, выдает доступы, обучает стандартам и круглосуточно отвечает на вопросы по базе знаний.', 
              result: 'Новичок выходит на норму быстрее: обучение идёт в диалоге, а не в очереди к руководителю.', 
              icon: 'M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z' },
            { id: 28, tag: "MOD_28", title: 'ИИ-ЛОГИСТ', desc: 'Диспетчеризация', 
              fullDesc: 'Непрерывная математическая оптимизация расписания доставок, отгрузок и производственных циклов. Мгновенно перестраивает маршруты при форс-мажорах.', 
              result: 'Узкие места видны до того, как встанет отдел — по факту загрузки, а не по жалобам.', 
              icon: 'M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z' },
            { id: 29, tag: "MOD_29", title: 'ИИ-КОМЛИД', desc: 'Стратегия и анализ', 
              fullDesc: 'Глобальный стратег коммерческого отдела. Принимает высокоуровневые решения об изменениях в кампаниях, анализирует коммерческую деятельность и работу подчиненных ИИ.', 
              result: 'Ускорение принятия бизнес-управленческих решений. Стратегия, основанная на фактах.', 
              icon: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z' },
    ];

    return (
      <div id="solutions-boot" style={{ maxWidth: '1000px', margin: '0 auto 100px', position: 'relative' }}>
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
                &gt; ЗАПУСК ЦИФРОВОГО ОТДЕЛА: РАЗВЕРТЫВАНИЕ СИСТЕМЫ<span style={{ animation: 'blink 1s step-end infinite' }}>_</span>
             </div>
             
             <div className="pc-motherboard">
                {[
                  { name: '// ДИРЕКЦИЯ', icon: "M2 18h20v2H2v-2z M4 6h2v6h2v-4h2v-2h4v2h2v4h2V6h2v10H4V6z", ids: [26, 24, 5, 7] },
                  { name: '// HR', icon: "M10 2h4v2h2v4h-2v2h-4V8H8V4h2V2zm-4 12h12v2h2v6H4v-6h2v-2z", ids: [8, 19, 22, 27] },
                  { name: '// КОММЕРЧЕСКИЙ ОТДЕЛ', icon: "M18 4h2v14h-2V4z M16 6h2v10h-2V6z M4 8h12v6H4V8z M10 14v4H6v-4z M2 10h2v2H2v-2z", ids: [29, 1, 3, 6, 2, 21, 12, 25] },
                  { name: '// ФИНАНСЫ', icon: "M11 2h2v2h4v4h-2V6h-4v2h4v4h-4v2h4v4h-2v2h-2v-2H7v-4h2v2h4v-2H9v-4h4V6H9v2H7V4h4V2z", ids: [30, 11, 10, 14] },
                  { name: '// ПРОИЗВОДСТВО', icon: "M10 2h4v4h2v2h4v4h-4v2h-2v4h-4v-4H8v-2H4V8h4V6h2V2z M10 10h4v4h-4v-4z", ids: [4, 17, 18, 28] },
                  { name: '// КОНТРОЛЬ КАЧЕСТВА', icon: "M4 4h16v16H4V4zm2 2v12h12V6H6zm8 2h2v2h-2v-2zm1 3h2v2h-2v-2zm-3 3h2v2h-2v-2z M8 10h2v2H8v-2z M7 12h2v2H7v-2z", ids: [16, 20, 13] },
                  { name: '// PR', icon: "M4 4h16v12h-6l-4 4v-4H4V4zm2 2v8h12V6H6z M8 8h8v2H8V8z M8 11h5v2H8v-2z", ids: [15, 9, 23] }
                ].map((dep, dIdx) => (
                   <motion.div 
                     key={dIdx} 
                     className={`pc-cluster ${dep.name === '// КОММЕРЧЕСКИЙ ОТДЕЛ' ? 'wide' : ''}`}
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: dIdx * 0.1, duration: 0.4 }}
                   >
                      {/* Technical traces */}
                      <div style={{ position: 'absolute', top: -20, left: '30px', width: '2px', height: '20px', background: 'var(--neon-cyan)', opacity: 0.8, boxShadow: '0 0 10px var(--neon-cyan)' }}></div>
                      <div style={{ position: 'absolute', top: -22, left: '28px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--neon-cyan)', opacity: 1, boxShadow: '0 0 10px var(--neon-cyan)' }}></div>
                      
                      <div style={{ position: 'absolute', bottom: -20, right: '20px', width: '2px', height: '20px', background: 'var(--neon-cyan)', opacity: 0.5 }}></div>
                      <div style={{ position: 'absolute', bottom: -22, right: '18px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--neon-cyan)', opacity: 0.8 }}></div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid var(--accent-border-light)', paddingBottom: '15px' }}>
                         <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--neon-cyan)" style={{ marginRight: '12px', filter: 'var(--icon-glow-filter, drop-shadow(0 0 8px rgba(34, 211, 238,0.8)))' }}>
                            <path d={dep.icon} />
                         </svg>
                         <h3 className="mono" style={{ color: 'var(--neon-cyan)', margin: 0, fontSize: '1.15rem', letterSpacing: '2px', textShadow: 'var(--glow-cyan)', fontWeight: 'bold' }}>{dep.name}</h3>
                      </div>
                      
                      <div className="cluster-agents-container" style={dep.name !== '// КОММЕРЧЕСКИЙ ОТДЕЛ' ? { display: 'flex', flexDirection: 'column', gap: '8px' } : {}}>
                         {dep.ids.map((id, pIdx) => {
                             const agent = agents.find(a => a.id === id);
                             if (!agent) return null;
                             const isExpanded = expandedAgentId === id;
                             return (
                                <div key={id} style={{ display: 'flex', flexDirection: 'column' }}>
                                  <motion.div 
                                    className="pc-agent-pin"
                                    onClick={() => setExpandedAgentId(isExpanded ? null : id)}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: dIdx * 0.1 + pIdx * 0.05, duration: 0.2 }}
                                    style={{ 
                                      padding: '12px 15px', 
                                      background: isExpanded ? 'var(--accent-bg-hover)' : 'var(--accent-bg)',
                                      borderColor: isExpanded ? 'var(--neon-cyan)' : 'var(--accent-border)'
                                    }}
                                  >
                                     <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--icon-fill)" style={{ marginRight: '14px', flexShrink: 0 }}>
                                       <path d={agent.icon} />
                                     </svg>
                                     <div style={{ width: '100%' }}>
                                        <div className="mono" style={{ fontSize: '1.25rem', color: 'var(--text-primary)', letterSpacing: '1px', marginBottom: '4px', fontWeight: 'bold' }}>{agent.title}</div>
                                        {!isExpanded && (
                                           <div className="mono" style={{ fontSize: '0.8rem', color: 'var(--neon-cyan)', opacity: 0.8, marginBottom: '2px' }}>{agent.desc}</div>
                                        )}
                                        <AgentProgressBar delay={dIdx * 0.1 + pIdx * 0.05 + 0.2} />
                                     </div>
                                  </motion.div>
                                  
                                  <AnimatePresence>
                                    {isExpanded && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        style={{ overflow: 'hidden' }}
                                      >
                                        <div style={{
                                          padding: '15px',
                                          background: 'var(--expanded-bg)',
                                          border: '1px solid var(--expanded-border)',
                                          borderTop: 'none',
                                          borderRadius: '0 0 4px 4px',
                                          fontSize: '0.85rem',
                                          color: 'var(--text-tertiary)'
                                        }}>
                                          <div className="mono" style={{ color: 'var(--neon-cyan)', marginBottom: '5px', fontSize: '0.75rem' }}>// АЛГОРИТМ РАБОТЫ:</div>
                                          <div className="mono" style={{ marginBottom: '15px', lineHeight: '1.6' }}>{agent.fullDesc}</div>
                                          
                                          <div className="mono" style={{ color: 'var(--neon-cyan)', marginBottom: '5px', fontSize: '0.75rem' }}>// БИЗНЕС-ОТДАЧА:</div>
                                          <div className="mono" style={{ background: 'var(--accent-bg-medium)', borderLeft: '2px solid var(--neon-cyan)', padding: '10px', lineHeight: '1.6' }}>{agent.result}</div>
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                             )
                         })}
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
               style={{ marginTop: '35px', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-primary)', letterSpacing: '1px' }}
             >
                [ СИСТЕМА ЕДИНА ] &gt; ВСЕ МОДУЛИ АКТИВНЫ. ПЕРЕДАЧА УПРАВЛЕНИЯ...
             </motion.div>

             {/* Conclusion Text Block is now moved OUT of this hud-panel */}
          </motion.div>
      </div>
    );
};


const SideNav = () => {
  const [activeId, setActiveId] = React.useState('top');

  const links = [
    { id: 'top', label: 'СТАРТ' },
    { id: 'professions', label: 'РЕАЛЬНОСТЬ' },
    { id: 'cta', label: 'ДЕЙСТВИЕ' },
    { id: 'pains', label: 'ОШИБКИ' },
    { id: 'solutions', label: 'ОТДЕЛ' },
    { id: 'ai-solutions', label: 'ВЫГОДЫ' },
    { id: 'cases', label: 'КЕЙСЫ' },
    { id: 'humanization', label: 'ГУМАНИЗАЦИЯ' },
    { id: 'founder', label: 'ОСНОВАТЕЛЬ' },
    { id: 'limits', label: 'ГРАНИЦЫ' },
    { id: 'audit', label: 'АУДИТ' }
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      let current = 'top';
      const scrollY = window.scrollY;
      
      links.forEach(({id}) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (top - 300 <= scrollY) {
            current = id;
          }
        }
      });
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="side-nav" style={{
      position: 'fixed',
      right: '2vw',
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      zIndex: 1000,
      alignItems: 'flex-end',
      paddingRight: '10px'
    }}>
      {/* Background tracking line */}
      <div style={{
          position: 'absolute',
          right: '13px',
          top: '8px',
          bottom: '8px',
          width: '2px',
          background: 'var(--accent-border)',
          zIndex: -1
      }}></div>

      {links.map((link, i) => {
        const isActive = activeId === link.id;
        return (
        <button key={link.id}
             type="button"
             onClick={() => document.getElementById(link.id)?.scrollIntoView({behavior:'smooth'})}
             aria-label={`Перейти к разделу ${link.label}`}
             aria-current={isActive ? 'true' : undefined}
             style={{
               display: 'flex',
               alignItems: 'center',
               gap: '15px',
               cursor: 'pointer',
               opacity: isActive ? 1 : 0.5,
               transition: 'all 0.3s'
             }}
             className={isActive ? 'nav-dot-container is-active' : 'nav-dot-container'}
        >
          <span className="mono nav-dot-label" style={{
              fontSize: isActive ? '0.75rem' : '0.65rem',
              color: isActive ? 'var(--neon-cyan)' : 'var(--text-dim)',
              textShadow: isActive ? 'var(--glow-cyan-strong)' : 'none',
              letterSpacing: '2px',
              transition: 'all 0.3s',
              whiteSpace: 'nowrap'
          }}>
            [ {String(i + 1).padStart(2, '0')} ] {link.label}
          </span>
          <div className="nav-dot-mark" style={{
             width: '8px',
             height: '8px',
             borderRadius: '50%',
             background: isActive ? 'var(--neon-cyan)' : 'var(--dot-inactive)',
             border: isActive ? 'none' : '1px solid var(--accent-border-medium)',
             boxShadow: isActive ? '0 0 12px 2px var(--neon-cyan)' : 'none',
             transition: 'all 0.3s',
             position: 'relative',
             zIndex: 2
          }} />
        </button>
        );
      })}
    </div>
  );
};

export default function App() {
  const [terminalText, setTerminalText] = useState('');
  const [activeAgent, setActiveAgent] = useState(null);
  const [currentTheme, setCurrentTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setCurrentTheme(document.documentElement.getAttribute('data-theme') || 'dark');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  const themeSuffix = currentTheme === 'light' ? '_light' : '';
  const fullText = `> Инициализация системы...
> Обнаружен огромный потенциал роста...
> ФОТ превышает норму...
> Предлагаемое решение: ИНТЕГРАЦИЯ ЦИФРОВЫХ СОТРУДНИКОВ.
> Запуск ядра ИИ...`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTerminalText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      <SideNav />
      <CyberNav />
      <FloatingTelegramButton />



      {/* Hero Section */}
      <header id="top" style={{ position: 'relative' }}>
        <div className="hero-content" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
          <motion.div 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            style={{ marginBottom: '100px' }}
          >
            <div className="terminal mono" style={{ marginBottom: 0 }}>
              <div className="terminal-header">
                <div className="terminal-dot"></div>
                <div className="terminal-dot"></div>
                <div className="terminal-dot"></div>
              </div>
              <div style={{ whiteSpace: 'pre-line' }}>{terminalText}</div>
            </div>
          </motion.div>

          <motion.h1 
            className="title-main"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
           style={{ marginTop: '0', marginBottom: '20px' }}>
            ДЕЛЕГИРУЙ НЕ ЛЮДЯМ.<br />
            ДЕЛЕГИРУЙ <span className="text-cyan">НЕЙРОСЕТИ.</span>
          </motion.h1>
          
          <motion.p 
            className="subtitle mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            style={{ marginBottom: '0px' }}
          >
             Оцифровка бизнес-процессов / Замена линейного персонала / Снижение ФОТ 
          </motion.p>
          
          
        </div>

      </header>
      {/* Profession Cloud Section */}
      <section id="professions" style={{ padding: 0 }}>
         <DeadProfessionsCloud />
      </section>

      {/* Mid-page CTA Section */}
      <section id="cta" className="mid-cta-section" style={{ padding: '120px 20px 150px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-50px' }}
            style={{ maxWidth: '1200px', margin: '0 auto' }}
        >
            <h2 className="title-main" style={{ marginBottom: '20px', textTransform: 'uppercase' }}>
              <span className="text-cyan">ИИФИЦИРУЙ</span> БИЗНЕС ПЕРВЫМ
            </h2>
            <p className="subtitle mono" style={{ marginBottom: '40px' }}>
              Успей внедрить нейросети раньше конкурентов и забери свою долю рынка.
            </p>
            <button className="cyber-btn" onClick={() => document.getElementById('solutions').scrollIntoView({ behavior: 'smooth' })}>
              Обогнать остальных
            </button>
        </motion.div>
      </section>

{/* Cyber Pains Array */}
      <section id="pains" style={{ marginBottom: '60px' }}>
        <h2 className="mono text-red" style={{ fontSize: '1.7rem', letterSpacing: '5px', marginBottom: '80px', textShadow: 'var(--glow-red)', textAlign: 'left', position: 'relative', zIndex: 10, background: 'var(--bg-color)', display: 'inline-block', paddingRight: '20px' }}>[ КРИТИЧЕСКИЕ ОШИБКИ БИЗНЕСА ]</h2>
        <div className="flow-container" style={{ marginTop: '0', marginBottom: '120px' }}>
          <div className="flow-line danger-flow-line" style={{ top: '-135px', bottom: '-120px' }}></div>
          {[
            { id: "ERR_01", title: "ПОТЕРИ ЛИДОВ", desc: "Сквозные дыры в воронке. Заявки испаряются в тишине.", fullDesc: "Менеджеры забывают перезвонить, долго готовят ответ или просто игнорируют 'неудобных' клиентов. Каждый не отвеченный за 5 минут лид — это выброшенные рекламные бюджеты.", impact: "Рекламный бюджет потрачен, заявка не отработана.", icon: <PixelFunnel /> },
            { id: "ERR_02", title: "ВИНТИК РУТИНЫ", desc: "Рутина съедает время, которое должно уходить на клиента.", fullDesc: "Вместо того чтобы думать, продавать и улучшать продукт, люди заняты перекладыванием бумажек, переносом данных из таблички в табличку и ручным формированием типовых документов.", impact: "Стагнация процессов. Нулевая креативность.", icon: <PixelCog /> },
            { id: "ERR_03", title: "НЕОПЛАЧЕННЫЕ СЧЕТА", desc: "Малая конверсия в оплату. Счета массово запрашиваются, но клиенты 'сливаются' и зависают.", fullDesc: "Отсутствие системного фоллоу-апа. Никто не пишет клиенту на следующий день, чтобы аккуратно и вовремя дожать сделку. Процесс бросается на самотёк после выставления счета.", impact: "Кассовые разрывы. Зависание дебиторки.", icon: <PixelFunnel /> },
            { id: "ERR_04", title: "КЛИЕНТЫ БЕЗ ОТВЕТА", desc: "Ночью, в выходные, в пиковые часы. Пустой чат с тремя точками.", fullDesc: "Аудитория ищет решение прямо сейчас. Если ваш бизнес 'гуляет' или 'спит' — клиент просто уходит к конкурентам, которые оказались быстрее или у которых настроены смарт-автоответы.", impact: "Потеря 'теплых' лидов из других часовых поясов.", icon: <PixelChat /> },
            { id: "ERR_05", title: "НЕТ АНАЛИТИКИ", desc: "Решения на глазок, без данных. Слепой график.", fullDesc: "Сбор отчетов занимает недели. К моменту, когда цифры ложатся на стол, они уже не актуальны. Вы не знаете реальную стоимость лида (CPL) и возврата инвестиций (ROI), пока не станет слишком поздно.", impact: "Риск слива бюджетов без возможности быстро среагировать.", icon: <PixelBlindChart /> },
            { id: "ERR_06", title: "РАЗДУТЫЙ ФОТ", desc: "Масштабирование = найм. Рост только через новых людей.", fullDesc: "Любой скачок продаж требует увеличения штата. Больше людей = больше управленческого хаоса, аренды офисов, налогов, ноутбуков и кофетерапии. Бизнес становится тяжелым, неповоротливым и уязвимым.", impact: "Снижение чистой маржинальности до минимума.", icon: <PixelPeopleWall /> },
            { id: "ERR_07", title: "ЧЕЛОВЕЧЕСКИЙ ФАКТОР", desc: "Соцпакет, больничные, декреты. Выгорание, ошибки и срывы дедлайнов.", fullDesc: "Люди устают, забывают важные договоренности, обижаются и уходят к конкурентам вместе с базой. Наем, адаптация и обучение новых сотрудников превращаются в бесконечный и дорогой цикл.", impact: "Высокая текучка кадров и потеря экспертизы.", icon: <PixelHumanError /> },
            { id: "ERR_08", title: "КОРРУПЦИЯ И ОТКАТЫ", desc: "Откатчики, махинации с закупками и тендерные сливы.", fullDesc: "Снабженцы договариваются с поставщиками за процент. Закупки происходят не по лучшей цене на рынке, а там, где 'выгоднее' конкретному менеджеру. Непрозрачность порождает хищения.", impact: "Прямые финансовые убытки. Закупка дороже рынка.", icon: <PixelHumanError /> }
          ].map((pain, i) => {
            const isLeft = i % 2 !== 0;
            return (
              <motion.div 
                key={i} 
                className="flow-node"
                style={{ position: 'relative' }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="flow-content terminal-panel danger-panel" style={{ position: 'relative' }}>
                  <div className="panel-bg-image pain-bg-image" style={{
                    backgroundImage: `url(${import.meta.env.BASE_URL}bg_${pain.id.toLowerCase()}${themeSuffix}.png)`,
                  }}></div>
                  <div style={{ position: 'relative', zIndex: 1, pointerEvents: 'none' }}>
                    {pain.icon}
                  </div>
                  <div className="terminal-panel-header" style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div className="terminal-dot" style={{background: '#ff5f56'}}></div>    
                      <div className="terminal-dot" style={{background: '#ffbd2e'}}></div>    
                      <div className="terminal-dot" style={{background: '#27c93f'}}></div>    
                    </div>
                    <div className="mono" style={{ fontSize: '0.65rem', opacity: 0.5, color: 'var(--neon-red)', letterSpacing: '0.05em' }}>[ERROR_CODE: {pain.id}] FATAL_EXCEPTION</div>
                  </div>
                  <div className="terminal-body" style={{ position: 'relative', zIndex: 1, textShadow: 'var(--text-glow-dark)', padding: '20px 30px', minHeight: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div className="mono mb-2" style={{ fontSize: '1.6rem', fontWeight: 'bold', color: 'var(--neon-red)' }}>&gt; {pain.title}</div>
                    <p className="mono" style={{ color: 'var(--neon-red)', fontSize: '1.1rem', marginTop: '10px' }}>&gt; {pain.desc}</p>
                    <p className="mono" style={{ color: 'var(--neon-red)', fontSize: '0.9rem', marginTop: '10px', opacity: 0.8, lineHeight: '1.5' }}>{pain.fullDesc}</p>
                    <p className="mono" style={{ color: 'var(--text-primary)', fontSize: '0.9rem', marginTop: '10px', opacity: 1, lineHeight: '1.5', textShadow: 'var(--glow-red)' }}>[ СИСТЕМНЫЙ УРОН ]: {pain.impact}</p>
                  </div>
                </div>
                <div className="flow-center-pulse danger-pulse"></div>
                <div className="flow-empty"></div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Neural Flow Solutions */}
      <section id="solutions" style={{ marginTop: '0px', paddingTop: '60px' }}>
        <h2 className="mono text-cyan" style={{ fontSize: '1.7rem', letterSpacing: '5px', marginBottom: '50px', textShadow: 'var(--glow-cyan)', textAlign: 'center', position: 'relative', zIndex: 10, background: 'transparent' }}>[ АРХИТЕКТУРА РЕШЕНИЯ: ЦИФРОВОЙ ОТДЕЛ ]</h2>


        <UnifiedSystemBoot />

        
        <div id="ai-solutions" className="flow-container" style={{ paddingTop: '50px' }}>
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
               result: "Разбирается каждый звонок, а не выборка: ошибки скрипта и причины отказов видны по всему потоку."
            },
            { 
               id: "BEN_03", title: "ЭКСТРЕМАЛЬНОЕ СНИЖЕНИЕ ФОТ", 
               desc: "Бизнес становится легким и маржинальным.",
               fullDesc: "Не нужно платить налоги, оплачивать больничные, арендовать офисы и закупать технику.",
               result: "Агент работает круглосуточно без ФОТ, отпусков и найма — расходы сводятся к моделям и хостингу."
            },
            { 
               id: "BEN_04", title: "РАДАР АНАЛИТИКИ 24/7", 
               desc: "Полная прозрачность метрик без задержек.",
               fullDesc: "Все звонки и переписки автоматически анализируются на лету. Сводки готовы в реальном времени, а не в конце месяца.",
               result: "Решение принимается по свежим данным, а не по отчёту в конце месяца."
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
                      <div className="panel-bg-image benefit-bg-image" style={{
                        backgroundImage: `url(${import.meta.env.BASE_URL}bg_${benefit.id.toLowerCase()}${themeSuffix}.png)`,
                      }}></div>
                      
                      <div className="terminal-panel-header" style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <div className="terminal-dot" style={{background: '#ff5f56'}}></div>    
                              <div className="terminal-dot" style={{background: '#ffbd2e'}}></div>    
                              <div className="terminal-dot" style={{background: '#27c93f'}}></div>    
                          </div>
                          <div className="mono" style={{ fontSize: '0.65rem', opacity: 0.5, color: 'var(--neon-cyan)', letterSpacing: '0.05em' }}>[MODULE_UPGRADE: {benefit.id}]</div>
                      </div>
                      
                      <div className="terminal-body" style={{ position: 'relative', zIndex: 1, textShadow: 'var(--text-glow-dark)', padding: '20px 30px', minHeight: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                          <div className="mono mb-2" style={{ fontSize: '1.6rem', fontWeight: 'bold', color: 'var(--neon-cyan)' }}>&gt; {benefit.title}</div>
                          <p className="mono" style={{ color: 'var(--neon-cyan)', fontSize: '1.1rem', marginTop: '10px' }}>&gt; {benefit.desc}</p>
                          <p className="mono" style={{ color: 'var(--neon-cyan)', fontSize: '0.9rem', marginTop: '10px', opacity: 0.8, lineHeight: '1.5' }}>{benefit.fullDesc}</p>
                          <p className="mono" style={{ color: 'var(--text-primary)', fontSize: '0.92rem', marginTop: '10px', opacity: 1, lineHeight: '1.5', textShadow: 'var(--glow-cyan)' }}>[ РЕЗУЛЬТАТ ]: {benefit.result}</p>
                      </div>
                  </div>
                  <div className="flow-center-pulse"></div>
                  <div className="flow-empty"></div>
              </motion.div>
            );
          })}

        </div>
      </section>

      <CaseStudies />

      {/* Resume Section / Architect Profiling */}
      {/* Humanization Section */}
      <section id="humanization" style={{ padding: '100px 20px', position: 'relative', zIndex: 10 }}>
        <h2 className="mono text-cyan" style={{ fontSize: '1.7rem', letterSpacing: '5px', marginBottom: '80px', textShadow: 'var(--glow-cyan)', textAlign: 'center' }}>[ КЛЮЧЕВАЯ ОСОБЕННОСТЬ: ГУМАНИЗАЦИЯ АГЕНТОВ ]</h2>
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', gap: '30px' }}>
            <motion.div 
               style={{ flex: '1 1 0%', minWidth: '280px', position: 'relative' }}
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: '-100px' }}
            >
                <img loading="lazy" src={`${import.meta.env.BASE_URL}humanization${themeSuffix}.png`} alt="Humanization Cyber Portrait" style={{ width: '100%', height: '100%', minHeight: '400px', objectFit: 'cover', borderRadius: '12px', boxShadow: 'var(--glow-cyan)', border: '1px solid var(--accent-border-medium)' }} />
            </motion.div>
            
            <motion.div 
               style={{ flex: '1 1 0%', minWidth: '280px', display: 'flex', flexDirection: 'column' }}
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: '-100px' }}
            >
                <div className="terminal-panel" style={{ flexGrow: 1, position: 'relative', display: 'flex', flexDirection: 'column' }}>
                    <div className="terminal-panel-header" style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                         <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                             <div className="terminal-dot" style={{background: '#ff5f56'}}></div>
                             <div className="terminal-dot" style={{background: '#ffbd2e'}}></div>
                             <div className="terminal-dot" style={{background: '#27c93f'}}></div>
                         </div>
                         <div className="mono" style={{ fontSize: '0.65rem', opacity: 0.5, color: 'var(--neon-cyan)', letterSpacing: '0.05em' }}>[SYS_MODULE: HUMANIZATION]</div>
                    </div>

                    <div className="terminal-body" style={{ position: 'relative', zIndex: 1, padding: '20px 30px', minHeight: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                            <p className="mono" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '15px' }}>
                                &gt; Цель: Безболезненный переход от человеческого управления к нейросетевому.
                            </p>
                            <p className="mono" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '15px' }}>
                                &gt; ИИ глубоко анализирует переписки, манеру речи, излюбленные фразы, тон, стиль маркетинга и объявлений. 
                            </p>
                            <p className="mono" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '15px' }}>
                                &gt; В результате агент общается строго в вашем стиле, без машинных шаблонов.
                            </p>
                        </div>
                        <div style={{ marginTop: '30px', borderTop: '1px solid var(--accent-border-light)', paddingTop: '20px' }}>
                             <p className="mono text-cyan" style={{ fontSize: '1.1rem', textShadow: 'var(--glow-cyan)', lineHeight: '1.6' }}>
                                  [ РЕЗУЛЬТАТ ]: Вы получаете премиального сотрудника. Скрипт отрабатывается без отклонений, а стиль общения повторяет ваш — без эффекта «робо-обслуживания».
                             </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
      </section>

      <section id="founder" style={{ padding: '80px 20px', position: 'relative', zIndex: 10, background: 'var(--founder-section-bg)', borderTop: '1px dashed var(--accent-border-light)', borderBottom: '1px dashed var(--accent-border-light)' }}>
        <h2 className="mono text-cyan" style={{ fontSize: '1.7rem', letterSpacing: '5px', marginBottom: '60px', textShadow: 'var(--glow-cyan)', textAlign: 'center' }}>[ DOSSIER: АРХИТЕКТОР СИСТЕМ ]</h2>
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'flex-start' }}>
            
            {/* Visual Profile Sidebar */}
            <motion.div 
               className="founder-sidebar"
               style={{ flex: '1 1 280px', position: 'sticky', top: '100px' }}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
            >
               <div className="pc-cluster" style={{ padding: '20px' }}>
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1.15', overflow: 'hidden', borderRadius: '4px', border: '1px solid var(--accent-border-medium)', boxShadow: 'var(--glow-cyan)' }}>
                      <img loading="lazy" src={`${import.meta.env.BASE_URL}founder_photo.jpg`} alt="Евгений Коробов, основатель НейроАктив" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div className="founder-caption">
                          <div className="mono founder-name">ЕВГЕНИЙ КОРОБОВ</div>
                          <div className="mono founder-role">&gt; AI AUTOMATION ENGINEER · ОСНОВАТЕЛЬ</div>
                      </div>
                  </div>
                  
                  <div style={{ marginTop: '25px' }}>
                      <h4 className="mono text-cyan" style={{ fontSize: '0.9rem', marginBottom: '10px' }}>// СЕТЕВЫЕ ПРОТОКОЛЫ (КОНТАКТЫ)</h4>
                      <div className="mono" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '5px 0', borderBottom: '1px solid var(--border-faint)', paddingBottom: '5px' }}>PHONE: +7 (909) 433-13-12</div>
                      <div className="mono" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '5px 0' }}>TELEGRAM: @korobovevgen</div>
                      <a className="mono founder-cv-link" href="https://ai-producing.com/#built" target="_blank" rel="noopener noreferrer">
                          <span>&gt; ПОЛНОЕ РЕЗЮМЕ И ПОРТФОЛИО</span>
                          <span className="founder-cv-host">ai-producing.com — 43 проекта, код, кейсы</span>
                      </a>
                  </div>
                  
                  <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--accent-border-light)' }}>
                      <h4 className="mono text-cyan" style={{ fontSize: '0.9rem', marginBottom: '10px' }}>// БАЗА ДАННЫХ (ОБРАЗОВАНИЕ)</h4>
                      <ul className="mono" style={{ fontSize: '0.8rem', color: 'var(--text-dimmer)', paddingLeft: '15px', lineHeight: '1.6' }}>
                          <li>ЮФУ, химфак — Химик (численные методы, анализ данных)</li>
                          <li>ЮФУ — Преподаватель (дополнительное)</li>
                          <li>ЮФУ — Управление в стиле коучинг</li>
                          <li>Профпереподготовка — Суицидология, 450 ч (2024)</li>
                          <li>Немецкий B1 · английский — техническая документация</li>
                      </ul>
                  </div>
               </div>
            </motion.div>

            {/* Resume Full Data Stack */}
            <motion.div 
               style={{ flex: '3 1 600px', display: 'flex', flexDirection: 'column', gap: '30px' }}
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
                {/* 1. О себе */}
                <div className="terminal-panel" style={{ padding: '30px' }}>
                    <div className="mono text-cyan" style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '15px', borderBottom: '1px solid var(--accent-border-medium)', paddingBottom: '10px' }}>&gt; SUMMARY._LOG</div>
                    <p className="mono" style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                       Двадцать лет я строил процессы людьми: от оператора контакт-центра до руководителя на 350 человек в Tele2, затем три собственные компании с нуля и 150+ млн ₽ закрытых сделок. Последние два года заменяю эти процессы системами — 43 проекта, 15 Telegram-ботов в проде, 6+ боевых серверов. Я знаю, что именно ломается в автоматизированном процессе, потому что двадцать лет отвечал за эти процессы лично.
                    </p>
                </div>
                
                {/* 2. Карьерные достижения (Метрики) */}
                <h4 className="mono text-cyan" style={{ fontSize: '1rem', marginTop: '10px', marginLeft: '5px' }}>// PRODUCTION_METRICS</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(135px, 1fr))', gap: '15px' }}>
                    {[
                        {v: '350', label: 'ЧЕЛОВЕК В УПРАВЛЕНИИ'},
                        {v: '150+ МЛН', label: 'B2B СДЕЛОК ЗАКРЫТО'},
                        {v: '3', label: 'КОМПАНИИ С НУЛЯ'},
                        {v: '43', label: 'ПРОЕКТА ЗА 2 ГОДА'},
                        {v: '15', label: 'БОТОВ В ПРОДЕ'},
                        {v: '6+', label: 'БОЕВЫХ СЕРВЕРОВ'}
                    ].map((st, i) => (
                        <div key={i} className="cyber-border-box" style={{ padding: '15px', background: 'var(--accent-bg)', textAlign: 'center' }}>
                            <div className="text-cyan mono" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{st.v}</div>
                            <div className="mono" style={{ color: 'var(--text-dim)', fontSize: '0.65rem', marginTop: '5px' }}>{st.label}</div>
                        </div>
                    ))}
                </div>

                {/* 3. Экспертиза */}
                <div className="terminal-panel" style={{ padding: '30px' }}>
                    <div className="mono text-cyan" style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '20px', borderBottom: '1px solid var(--accent-border-medium)', paddingBottom: '10px' }}>&gt; CORE._EXPERTISE_MODULES</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                        <div>
                            <div style={{ display: 'inline-block', padding: '4px 8px', background: 'var(--neon-cyan)', color: 'var(--badge-text)', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '10px' }}>ИИ И АВТОМАТИЗАЦИЯ</div>
                            <ul className="mono" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', paddingLeft: '20px', lineHeight: '1.6' }}>
                                <li>Проектирование ИИ-систем для автоматизации продаж, обслуживания и аналитики</li>
                                <li>Чат-боты и голосовые ассистенты для бизнеса (24/7)</li>
                                <li>ИИ-воронки лидов: сбор, скоринг, распределение</li>
                                <li>Мониторинг рынка и конкурентов в реальном времени</li>
                                <li>Интеграции: Bitrix24, amoCRM, 1С, Telegram, WhatsApp</li>
                            </ul>
                        </div>
                        <div>
                            <div style={{ display: 'inline-block', padding: '4px 8px', background: '#ff5f56', color: '#000', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '10px' }}>БИЗНЕС-ПРОЦЕССЫ</div>
                            <ul className="mono" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', paddingLeft: '20px', lineHeight: '1.6' }}>
                                <li>Контактные центры (от 15 до 350 сотрудников)</li>
                                <li>Бэк-офисы и системы обработки клиентских обращений</li>
                                <li>Отделы продаж, маркетинга, логистики, снабжения</li>
                                <li>Системы KPI, мониторинга качества, real-time аналитика</li>
                                <li>Процедуры эскалации, антикризисного управления</li>
                            </ul>
                        </div>
                        <div>
                            <div style={{ display: 'inline-block', padding: '4px 8px', background: '#ffbd2e', color: '#000', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '10px' }}>АНАЛИТИКА И ДАННЫЕ</div>
                            <ul className="mono" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', paddingLeft: '20px', lineHeight: '1.6' }}>
                                <li>Разработка систем отчётности и аналитических дашбордов</li>
                                <li>Конверсионная аналитика, управление оттоком</li>
                                <li>CRM-системы: проектирование и внедрение</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 4. Опыт в деталях */}
                <div className="terminal-panel" style={{ padding: '30px' }}>
                    <div className="mono text-cyan" style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '25px', borderBottom: '1px solid var(--accent-border-medium)', paddingBottom: '10px' }}>&gt; WORK._HISTORY._LOG</div>
                    
                    <div style={{ position: 'relative', paddingLeft: '25px', borderLeft: '2px solid var(--accent-border-light)' }}>
                        <div style={{ marginBottom: '35px', position: 'relative' }}>
                            <div style={{ position: 'absolute', left: '-33px', top: '5px', width: '14px', height: '14px', background: 'var(--neon-cyan)', borderRadius: '50%', border: '2px solid var(--timeline-dot-border)', boxShadow: '0 0 10px var(--neon-cyan)' }}></div>
                            <h4 className="syncopate text-cyan" style={{ fontSize: '1rem', margin: '0 0 5px 0' }}>СОБСТВЕННЫЙ B2B БИЗНЕС</h4>
                            <div className="mono" style={{ color: 'var(--text-dim)', fontSize: '0.85rem', marginBottom: '8px' }}>2016-2024 | CEO, Основатель</div>
                            <p className="mono" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>Три компании с нуля: стройматериалы, инженерные системы, сервис. Совокупный оборот 35+ млн ₽/год, 650+ договоров, полный цикл от маркетинга до логистики.</p>
                        </div>
                        
                        <div style={{ marginBottom: '35px', position: 'relative' }}>
                            <div style={{ position: 'absolute', left: '-33px', top: '5px', width: '14px', height: '14px', background: '#ffbd2e', borderRadius: '50%', border: '2px solid var(--timeline-dot-border)' }}></div>
                            <h4 className="syncopate" style={{ color: '#ffbd2e', fontSize: '1rem', margin: '0 0 5px 0' }}>БИЗНЕС-КОНСАЛТИНГ</h4>
                            <div className="mono" style={{ color: 'var(--text-dim)', fontSize: '0.85rem', marginBottom: '8px' }}>2016 | Руководитель продаж в «Высоцкий Консалтинг»</div>
                            <p className="mono" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>Организация тренингов, бизнес-клубов, продажа консалтинговых услуг.</p>
                        </div>

                        <div style={{ marginBottom: '35px', position: 'relative' }}>
                            <div style={{ position: 'absolute', left: '-33px', top: '5px', width: '14px', height: '14px', background: '#ff5f56', borderRadius: '50%', border: '2px solid var(--timeline-dot-border)' }}></div>
                            <h4 className="syncopate" style={{ color: '#ff5f56', fontSize: '1rem', margin: '0 0 5px 0' }}>РОСТЕЛЕКОМ</h4>
                            <div className="mono" style={{ color: 'var(--text-dim)', fontSize: '0.85rem', marginBottom: '8px' }}>2015-2016 | Руководитель клиентского опыта (Ростовская обл.)</div>
                            <p className="mono" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>Нормализация оттока клиентов за 6 месяцев. Оптимизация каналов обслуживания и оплат. Централизация архивов из 50+ населённых пунктов.</p>
                        </div>

                        <div style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', left: '-33px', top: '5px', width: '14px', height: '14px', background: '#aaa', borderRadius: '50%', border: '2px solid var(--timeline-dot-border)' }}></div>
                            <h4 className="syncopate" style={{ color: 'var(--text-dimmer)', fontSize: '1rem', margin: '0 0 5px 0' }}>TELE2</h4>
                            <div className="mono" style={{ color: 'var(--text-dim)', fontSize: '0.85rem', marginBottom: '8px' }}>2006-2012 | От оператора до руководителя КЦ</div>
                            <p className="mono" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>Контактный центр на 350 человек. Построил все процессы с нуля: обслуживание клиентов 28 регионов, бэк-офис на 36 регионов, систему мониторинга качества, real-time управление трафиком, систему мотивации и коммуникации.</p>
                        </div>
                    </div>
                </div>

            </motion.div>
        </div>
      </section>

      {/* Границы: что мы не делаем. Приём взят с ai-producing.com — там он
          работает сильнее любого обещания. Признанный предел дороже фасада. */}
      <section id="limits" style={{ padding: '60px 5%', maxWidth: '900px', margin: '0 auto' }}>
        <h2 className="syncopate text-cyan" style={{ fontSize: '1.4rem', marginBottom: '10px' }}>ЧЕГО МЫ НЕ ДЕЛАЕМ</h2>
        <p className="mono" style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: 0, marginBottom: '30px', maxWidth: '62ch' }}>
          Чтобы это не выяснялось на третьей неделе внедрения.
        </p>
        <div className="limits-grid">
          {[
            ['Не заменяем отдел целиком за раз', 'Начинаем с одного процесса, который считается. Если он не окупился — дальше не идём.'],
            ['Не делаем ИИ ради ИИ', 'Если задача решается регламентом, шаблоном или таблицей — так и скажем. Это дешевле и надёжнее агента.'],
            ['Не называем цифру до разбора', 'Сколько именно вы сэкономите, видно после разбора вашего процесса, а не из прайса.'],
            ['Не снимаем ответственность с человека', 'Агент снимает объём и держит сроки. Решение и подпись остаются за вами.'],
            ['Не обещаем, что агент не ошибётся', 'Обещаем контур проверки до выдачи ответа, логи и разбор инцидента, когда он случится.']
          ].map(([t, d], i) => (
            <div key={i} className="limit-card">
              <div className="mono limit-card-title">{t}</div>
              <div className="mono limit-card-text">{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Console */}
      <section id="audit" style={{ padding: '80px 5%', maxWidth: '800px', margin: '0 auto', paddingBottom: '150px' }}>
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
                <h2 className="title-main syncopate" style={{ fontSize: '2.5rem', color: 'var(--text-primary)', textShadow: 'var(--glow-cyan)', margin: '0 0 20px 0' }}>
                    СИСТЕМА ГОТОВА<br/><span style={{ color: 'var(--neon-cyan)' }}>К ВНЕДРЕНИЮ</span>
                </h2>

                <p className="mono" style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto 40px' }}>
                    &gt; Бесплатный аудит ваших бизнес-процессов: анализ воронки, оценка потенциала ИИ-автоматизации, расчёт экономии ФОТ.
                </p>

                <div style={{ maxWidth: '450px', margin: '0 auto 30px' }}>
                    <CTAForm />
                </div>

                <p className="mono" style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginTop: '20px' }}>
                    Или напишите напрямую в Telegram: <a href="https://t.me/korobovevgen" target="_blank" rel="noopener noreferrer" className="text-cyan" style={{ textDecoration: 'none' }}>@korobovevgen</a>
                </p>
            </div>
        </div>
      </section>

      {/* Cyber Footer */}
      <footer style={{ borderTop: '1px solid var(--accent-border-light)', padding: '30px 5%', background: 'var(--footer-bg)', textAlign: 'center' }}>
          <div className="mono" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', opacity: 0.7 }}>
              &gt; SYSTEM_READY // NEUROACTIVE © 2026<br/>
              &gt; АВТОМАТИЗАЦИЯ БИЗНЕС-ПРОЦЕССОВ И ИИ-АГЕНТЫ<br/>
              &gt; PHONE: +7 (909) 433-13-12 | TELEGRAM: <a href="https://t.me/korobovevgen" target="_blank" rel="noopener noreferrer" className="text-cyan" style={{ textDecoration: 'none' }}>@korobovevgen</a>
          </div>
      </footer>
    </div>
  );
}
