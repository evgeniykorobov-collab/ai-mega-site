const fs = require('fs');
let f = fs.readFileSync('src/App.jsx','utf8');
const start = f.indexOf('const UnifiedSystemBoot');
const end = f.indexOf('export default function App');
if(start!==-1 && end!==-1){
   fs.writeFileSync('unified_boot.txt', f.substring(start, end));
} else {
   fs.writeFileSync('unified_boot.txt', "Not found");
}
