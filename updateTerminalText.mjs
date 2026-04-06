import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');

const regex = /> Обнаружены узкие горлышки бизнеса\.\.\./g;

if (regex.test(content)) {
    content = content.replace(regex, '> Обнаружен огромный потенциал роста...');
    fs.writeFileSync('src/App.jsx', content, 'utf8');
    console.log('Successfully updated terminal text.');
} else {
    // maybe encoded with unicode escapes or differently formatted
    console.log('Could not match original string.');
}
