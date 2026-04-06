const fs = require('fs');
let f = fs.readFileSync('src/App.jsx', 'utf8');
const start = f.indexOf('<section id="founder"');
const end = f.indexOf('export default function App');
if(start!==-1 && end!==-1){
   fs.writeFileSync('resume_section.txt', f.substring(start, end));
}
