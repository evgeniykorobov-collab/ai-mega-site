const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// Replace minHeight and padding
const oldPanelStyle = `minHeight: '260px', padding: '40px 30px'`;
const newPanelStyle = `padding: '20px 30px'`;
code = code.split(oldPanelStyle).join(newPanelStyle);

// Let's also tighten the margin-tops in the text
const oldMargin = `marginTop: '15px'`;
const newMargin = `marginTop: '10px'`;
code = code.split(oldMargin).join(newMargin);

// Let's also reduce the global padding of terminal-body inside humanization if any
const oldHumanizationPadding = `padding: '40px 30px'`;
const newHumanizationPadding = `padding: '20px 30px'`;
code = code.split(oldHumanizationPadding).join(newHumanizationPadding);

fs.writeFileSync('src/App.jsx', code);
console.log("Successfully reduced panel heights.");
