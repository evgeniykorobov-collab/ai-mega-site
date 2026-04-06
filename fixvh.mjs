import fs from 'fs';

let css = fs.readFileSync('src/index.css', 'utf8');
if (css.includes('min-height: 100vh;')) {
    css = css.replace(/min-height:\s*100vh;/g, 'min-height: 65vh;');
    fs.writeFileSync('src/index.css', css, 'utf8');
    console.log("Fixed header height to 65vh.");
}

let app = fs.readFileSync('src/App.jsx', 'utf8');
app = app.replace(/marginTop:\s*'-[0-9]+vh'/, "marginTop: '0px'");
// if someone had style={{ padding: '0px 20px 80px', marginTop: '-14vh', ... }}
if (app.includes("marginTop: '-14vh'")) {
    app = app.replace("marginTop: '-14vh'", "marginTop: '0px'");
}
app = app.replace(/marginTop: '-8vh'/, "marginTop: '0px'");
fs.writeFileSync('src/App.jsx', app, 'utf8');
