import React, { useState } from 'react';

export default function CTAForm({ compact = false }) {
  const [form, setForm] = useState({ name: '', phone: '', niche: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;

    setStatus('sending');

    const text = `🔔 <b>Новая заявка с сайта НейроАктив</b>\n\n` +
      `👤 <b>Имя:</b> ${form.name}\n` +
      `📱 <b>Телефон:</b> ${form.phone}\n` +
      `🏢 <b>Ниша:</b> ${form.niche || 'Не указана'}`;

    try {
      // Using a simple webhook approach - the bot token sends to the owner's chat
      const BOT_TOKEN = '7859511540:AAGbcD_example_placeholder';
      const CHAT_ID = '@neiroaktiv_leads'; // or numeric chat_id

      const resp = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'HTML' })
      });

      if (resp.ok) {
        setStatus('success');
        setForm({ name: '', phone: '', niche: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 5000);
  };

  if (status === 'success') {
    return (
      <div className="terminal-panel" style={{ padding: '30px', textAlign: 'center' }}>
        <div className="mono text-cyan" style={{ fontSize: '1.3rem', marginBottom: '10px' }}>[ ЗАПРОС ПРИНЯТ ]</div>
        <p className="mono" style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
          Мы свяжемся с вами в ближайшее время.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
      <input
        type="text"
        placeholder="Ваше имя"
        value={form.name}
        onChange={e => setForm({...form, name: e.target.value})}
        required
        className="mono cyber-input"
      />
      <input
        type="tel"
        placeholder="+7 (___) ___-__-__"
        value={form.phone}
        onChange={e => setForm({...form, phone: e.target.value})}
        required
        className="mono cyber-input"
      />
      <input
        type="text"
        placeholder="Ваша ниша / сфера бизнеса"
        value={form.niche}
        onChange={e => setForm({...form, niche: e.target.value})}
        className="mono cyber-input"
      />
      <button type="submit" className="cyber-btn" disabled={status === 'sending'} style={{ width: '100%', marginTop: '5px' }}>
        {status === 'sending' ? 'ОТПРАВКА...' : 'ЗАПРОСИТЬ АУДИТ'}
      </button>
      {status === 'error' && (
        <p className="mono" style={{ color: 'var(--neon-red)', fontSize: '0.85rem', textAlign: 'center' }}>
          Ошибка отправки. Напишите нам в Telegram: @korobovevgen
        </p>
      )}
    </form>
  );
}
