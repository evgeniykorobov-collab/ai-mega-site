import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');

content = content.replace("'SEO-ОПТИМИЗАТОР'", "'СЕОШНИК'");
content = content.replace("'МЕНЕДЖЕР ПО ПРОДАЖАМ (ХОЛОДНЫЕ)'", "'МЕНЕДЖЕР ПО ПРОДАЖАМ'");
content = content.replace("'ПАРСЕР ДАННЫХ'", "'МАРКЕТОЛОГ'");

fs.writeFileSync('src/App.jsx', content, 'utf8');
console.log("Updated professions successfully.");
