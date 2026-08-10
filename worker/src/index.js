/**
 * НейроАктив — релей заявок.
 *
 * Единственная задача: принять заявку с neiroaktiv.ru и переложить её в
 * Telegram. Токен бота живёт в секретах Воркера и в браузер не попадает.
 *
 * Секреты (wrangler secret put):
 *   TELEGRAM_BOT_TOKEN — токен от @BotFather
 *   TELEGRAM_CHAT_ID   — куда слать: @канал или числовой id
 *
 * Переменные (wrangler.toml):
 *   ALLOWED_ORIGIN — домен, которому разрешён доступ
 */

const LIMITS = { name: 100, phone: 40, niche: 200 };

const cors = (origin) => ({
  'Access-Control-Allow-Origin': origin,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400',
});

const json = (body, status, origin) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...cors(origin) },
  });

const clean = (value, max) =>
  String(value ?? '').replace(/\s+/g, ' ').trim().slice(0, max);

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export default {
  async fetch(request, env) {
    const origin = env.ALLOWED_ORIGIN || 'https://neiroaktiv.ru';

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors(origin) });
    }
    if (request.method !== 'POST') {
      return json({ error: 'method_not_allowed' }, 405, origin);
    }

    // Заявку принимаем только со своего домена.
    const from = request.headers.get('Origin');
    if (from && from !== origin) {
      return json({ error: 'forbidden_origin' }, 403, origin);
    }

    let data;
    try {
      data = await request.json();
    } catch {
      return json({ error: 'bad_json' }, 400, origin);
    }

    const name = clean(data.name, LIMITS.name);
    const phone = clean(data.phone, LIMITS.phone);
    const niche = clean(data.niche, LIMITS.niche);

    if (!name || !phone) {
      return json({ error: 'name_and_phone_required' }, 400, origin);
    }
    // Телефон должен содержать хотя бы 7 цифр — отсекает мусорные отправки.
    if ((phone.match(/\d/g) || []).length < 7) {
      return json({ error: 'phone_invalid' }, 400, origin);
    }

    const token = env.TELEGRAM_BOT_TOKEN;
    const chatId = env.TELEGRAM_CHAT_ID;
    if (!token || !chatId) {
      // Секреты не заданы — говорим об этом честно, сайт уведёт человека в Telegram.
      return json({ error: 'relay_not_configured' }, 503, origin);
    }

    const country = request.headers.get('CF-IPCountry') || '—';
    const text =
      `🔔 <b>Заявка с сайта НейроАктив</b>\n\n` +
      `👤 <b>Имя:</b> ${escapeHtml(name)}\n` +
      `📱 <b>Телефон:</b> ${escapeHtml(phone)}\n` +
      `🏢 <b>Ниша:</b> ${escapeHtml(niche || 'не указана')}\n\n` +
      `<i>${escapeHtml(clean(data.source, 60) || 'neiroaktiv.ru')} · ${escapeHtml(country)}</i>`;

    const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' }),
    });

    if (!tg.ok) {
      // Тело ответа Telegram наружу не отдаём — в нём бывает часть токена.
      console.error('telegram_failed', tg.status, await tg.text());
      return json({ error: 'delivery_failed' }, 502, origin);
    }

    return json({ ok: true }, 200, origin);
  },
};
