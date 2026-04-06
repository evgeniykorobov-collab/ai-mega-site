const fs = require('fs');
let f = fs.readFileSync('src/App.jsx', 'utf8');
const start = f.indexOf('<section id="founder"');
if(start!==-1){
   fs.writeFileSync('founder_section.txt', f.substring(start, f.length));
}
