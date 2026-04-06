const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Move "Снабженец" to Production:
// Find 'name: "// ПРОИЗВОДСТВО", icon: "M10 2h4v4h2v2h4v4h-4v2h-2v4h-4v-4H8v-2H4V8h4V6h2V2z M10 10h4v4h-4v-4z", ids: [17, 18, 28]'
code = code.replace('ids: [17, 18, 28]', 'ids: [4, 17, 18, 28]');
// Find 'name: "// ФИНАНСЫ", icon: "M11 2h2v2h4v4h-2V6h-4v2h4v4h-4v2h4v4h-2v2h-2v-2H7v-4h2v2h4v-2H9v-4h4V6H9v2H7V4h4V2z", ids: [11, 4, 10, 14]'
code = code.replace('ids: [11, 4, 10, 14]', 'ids: [11, 10, 14]');

// 2. Swap sections
// The sections are marked with {/* Humanization Section */} and {/* Resume Section / Architect Profiling */} maybe?
// Wait, my previous cleanup removed the *second* Resume Section. The first one is labeled visually but maybe not with the comment?
// Let's split by '<section id="humanization"' and '<section id="founder"' and '</section>' 

const founderIdx = code.indexOf('<section id="founder"');
const humanIdx = code.indexOf('<section id="humanization"');

if (founderIdx !== -1 && humanIdx !== -1 && founderIdx < humanIdx) {
    // Founder is currently BEFORE humanization! We need to swap.
    // Founder goes to end of founder block.
    // How to find the end of the founder section block?
    // It is `</section>` preceding '{/* Humanization Section */}'. Let's find `<section id="humanization"`.
    const humanCommentIdx = code.lastIndexOf('{/*', humanIdx); 
    
    // So the founder block is code.substring(founderIdx, humanCommentIdx).
    let founderBlock = code.substring(founderIdx, humanCommentIdx);
    
    // Now where does humanization end? 
    const finalConsoleIdx = code.indexOf('<section id="audit"');
    const finalConsoleCommentIdx = code.lastIndexOf('{/*', finalConsoleIdx);
    
    let humanBlock = code.substring(humanCommentIdx, finalConsoleCommentIdx);
    
    // The previous text is code.substring(0, founderIdx)
    // The new text is:
    let newCode = code.substring(0, founderIdx) + humanBlock + founderBlock + code.substring(finalConsoleCommentIdx);
    fs.writeFileSync('src/App.jsx', newCode);
    console.log("Successfully swapped Founder and Humanization sections, and moved Agent 4 to Production.");
} else if (humanIdx < founderIdx) {
    console.log("Sections are already in the requested order (Humanization then Founder). Agent 4 moved.");
    fs.writeFileSync('src/App.jsx', code);
} else {
    console.log("Pattern not found for swapping.");
    fs.writeFileSync('src/App.jsx', code);
}
