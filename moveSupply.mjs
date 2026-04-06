import fs from 'fs';
let content = fs.readFileSync('src/App.jsx', 'utf8');

if (content.includes("'МЕНЕДЖЕР ПО СНАБЖЕНИЮ'")) {
    content = content.replace(/,?\s*'МЕНЕДЖЕР ПО СНАБЖЕНИЮ',?/, '');
    
    // Insert after 'SMM-МЕНЕДЖЕР' to be near the top center
    content = content.replace(/'SMM-МЕНЕДЖЕР',/, "'SMM-МЕНЕДЖЕР', 'МЕНЕДЖЕР ПО СНАБЖЕНИЮ',");
    
    fs.writeFileSync('src/App.jsx', content, 'utf8');
    console.log("Moved МЕНЕДЖЕР ПО СНАБЖЕНИЮ");
} else {
    console.log("МЕНЕДЖЕР ПО СНАБЖЕНИЮ not found");
}
