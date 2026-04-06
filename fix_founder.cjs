const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// Replace the image in the comprehensive founder section
code = code.replace('<img src="/founder_cyber.png"', '<img src="/founder_cyber_glasses.png"');

// Delete the second founder section
const secondFounderStart = code.lastIndexOf('{/* Resume Section / Architect Profiling */}');
const finalConsoleStart = code.indexOf('{/* Final Console */}');

if (secondFounderStart !== -1 && finalConsoleStart !== -1 && secondFounderStart > code.indexOf('{/* Humanization Section */}')) {
    code = code.substring(0, secondFounderStart) + code.substring(finalConsoleStart);
    fs.writeFileSync('src/App.jsx', code);
    console.log("Successfully cleaned up the duplicate founder section and updated the image.");
} else {
    console.log("Could not find the boundries to delete the duplicate section. Start: " + secondFounderStart + ", end: " + finalConsoleStart);
}
