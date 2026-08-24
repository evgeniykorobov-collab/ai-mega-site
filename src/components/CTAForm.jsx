import React, { useState } from 'react';

/**
 * Форма заявки.
 *
 * Заявка уходит на серверный релей (Cloudflare Worker) — адрес берётся из
 * VITE_LEAD_ENDPOINT на сборке. Токен Telegram-бота живёт в секретах Воркера
 * и в браузер не попадает никогда.
 *
 * Если релей не настроен или недоступен — заявка не теряется: открываем
 * Telegram с уже готовым текстом и показываем его же на экране вместе с
 * телефоном. Человек доходит до нас в любом случае.
 */

const LEAD_ENDPOINT = import.meta.env.VITE_LEAD_ENDPOINT || '';
const TELEGRAM_USER = 'korobovevgen';
const PHONE = '+7 909 433-13-12';
const PHONE_HREF = '+79094331312';

export default function CTAForm() {
  const [form, setForm] = useState({ name: '', phone: '', niche: '' });
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | success | handoff

  const plainText = () =>
    `Заявка с сайта НейроАктив\n` +
    `Имя: ${form.name}\n` +
    `Телефон: ${form.phone}\n` +
    `Ниша: ${form.niche || 'не указана'}`;

  const handoffToTelegram = () => {
    const url = `https://t.me/${TELEGRAM_USER}?text=${encodeURIComponent(plainText())}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setStatus('handoff');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !consent) return;

    setStatus('sending');

    if (LEAD_ENDPOINT) {
      try {
        const resp = await fetch(LEAD_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: form.name,
            phone: form.phone,
            niche: form.niche,
            source: 'neiroaktiv.ru'
          })
        });
        if (resp.ok) {
          setStatus('success');
          setForm({ name: '', phone: '', niche: '' });
          setConsent(false);
          return;
        }
      } catch {
        // молча падаем в Telegram — посетителю незачем знать про наш релей
      }
    }

    handoffToTelegram();
  };

  if (status === 'success') {
    return (
      <div className="terminal-panel" style={{ padding: '30px', textAlign: 'center' }}>
        <div className="mono text-cyan" style={{ fontSize: '1.3rem', marginBottom: '10px' }}>ЗАПРОС ПРИНЯТ</div>
        <p className="mono" style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
          Мы свяжемся с вами в ближайшее время.
        </p>
      </div>
    );
  }

  if (status === 'handoff') {
    return (
      <div className="terminal-panel" style={{ padding: '30px' }}>
        <div className="mono text-cyan" style={{ fontSize: '1.2rem', marginBottom: '12px' }}>ОТКРЫВАЕМ TELEGRAM</div>
        <p className="mono" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: 0 }}>
          Текст заявки уже подставлен — остаётся нажать «отправить». Если окно не открылось,
          скопируйте и напишите нам напрямую:
        </p>
        <pre className="mono" style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--accent-border)',
          borderRadius: 'var(--radius-sm, 3px)',
          padding: '14px',
          fontSize: '0.85rem',
          color: 'var(--text-main)',
          whiteSpace: 'pre-wrap',
          margin: '0 0 16px'
        }}>{plainText()}</pre>
        <div className="mono" style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', fontSize: '0.95rem' }}>
          <a href={`https://t.me/${TELEGRAM_USER}`} target="_blank" rel="noopener noreferrer" className="text-cyan">
            t.me/{TELEGRAM_USER}
          </a>
          <a href={`tel:${PHONE_HREF}`} className="text-cyan">{PHONE}</a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
      <input
        type="text"
        placeholder="Ваше имя"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
        required
        className="mono cyber-input"
      />
      <input
        type="tel"
        placeholder="+7 (___) ___-__-__"
        value={form.phone}
        onChange={e => setForm({ ...form, phone: e.target.value })}
        required
        className="mono cyber-input"
      />
      <input
        type="text"
        placeholder="Ваша ниша / сфера бизнеса"
        value={form.niche}
        onChange={e => setForm({ ...form, niche: e.target.value })}
        className="mono cyber-input"
      />

      <label className="mono consent-row">
        <input
          type="checkbox"
          checked={consent}
          onChange={e => setConsent(e.target.checked)}
          required
          className="consent-box"
        />
        <span>
          Согласен на обработку персональных данных и принимаю{' '}
          <a href="/privacy.html" target="_blank" rel="noopener noreferrer" className="text-cyan">политику конфиденциальности</a>
        </span>
      </label>

      <button
        type="submit"
        className="cyber-btn"
        disabled={status === 'sending' || !consent}
        style={{ width: '100%', marginTop: '5px' }}
      >
        {status === 'sending' ? 'ОТПРАВКА...' : 'ЗАПРОСИТЬ АУДИТ'}
      </button>
    </form>
  );
}
