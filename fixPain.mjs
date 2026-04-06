import fs from 'fs';

const filePath = 'src/App.jsx';
let content = fs.readFileSync(filePath, 'utf8');

const originalDesc = 'Соцпакет, больничные, декрет. ИИ работает 24/7/365 без доплат.';
const newDesc = 'Соцпакет, больничные, декреты. Выгорание, ошибки и срывы дедлайнов.';

content = content.replace(originalDesc, newDesc);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Pain point updated successfully.');
