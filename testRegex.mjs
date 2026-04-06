import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');

const regex = /<div className="terminal-panel-header">[\s\S]*?<div className="terminal-dot" style=\{\{background: '#ff5f56'\}\}><\/div>[\s\S]*?<div className="terminal-dot" style=\{\{background: '#ffbd2e'\}\}><\/div>[\s\S]*?<div className="terminal-dot" style=\{\{background: '#27c93f'\}\}><\/div>[\s\S]*?<\/div>[\s\S]*?<div className="terminal-body" style=\{\{ position: 'relative', zIndex: 1 \}\}>[\s\S]*?<div className="mono mb-3" style=\{\{ fontSize: '0\.65rem', opacity: 0\.5, color: 'var\(--neon-red\)', letterSpacing: '0\.05em' \}\}>&gt; \[ERROR_CODE: \{pain\.id\}\] FATAL_EXCEPTION<\/div>[\s\S]*?<div className="mono mb-2" style=\{\{ fontSize: '1\.5rem', fontWeight: 'bold', color: 'var\(--neon-red\)' \}\}>&gt; \{pain\.title\}<\/div>[\s\S]*?<p className="mono" style=\{\{ color: 'var\(--neon-red\)' \}\}>&gt; \{pain\.desc\}<\/p>[\s\S]*?<\/div>/g;

const match = regex.exec(content);
if(match) {
    console.log("MATCH FOUND!");
} else {
    console.log("NO MATCH");
}
