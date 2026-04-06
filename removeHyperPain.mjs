import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');

const regex = /\{\/\* Hyper-Pain Section \*\/\}\s*<section className="hyper-pain-section"[\s\S]*?<\/section>\s*/g;

if (regex.test(content)) {
    content = content.replace(regex, '');
    fs.writeFileSync('src/App.jsx', content, 'utf8');
    console.log('Successfully removed hyper-pain section.');
} else {
    console.log('Hyper-pain section not found!');
}
