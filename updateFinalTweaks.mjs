import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Pull higher
if (content.includes("marginTop: '-8vh'")) {
    content = content.replace(/marginTop: '-8vh'/, "marginTop: '-14vh'");
} else {
    content = content.replace(/padding: '0px 20px 80px',/, "padding: '0px 20px 80px', marginTop: '-14vh',");
}

// 2. Change subtitle
content = content.replace(/Эти профессии навсегда удаляются из штатного расписания/i, "Эти профессии неизбежно исчезнут в течение 3-5 лет");

// 3. Add Operator and Doctor
if (content.includes("'МЕНЕДЖЕР ПО ПРОДАЖАМ'")) {
    content = content.replace(/'МЕНЕДЖЕР ПО ПРОДАЖАМ'/, "'ОПЕРАТОР БАНКА', 'ВРАЧ-КОНСУЛЬТАНТ', 'МЕНЕДЖЕР ПО ПРОДАЖАМ'");
}

fs.writeFileSync('src/App.jsx', content, 'utf8');
console.log("Updated margins, text, and professions.");
