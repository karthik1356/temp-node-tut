const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req)
    if (req.url === '/') {
        res.end('Welcome to our home page');
    }
    else if (req.url === '/about') { // Added missing else if
        res.end('here is our short story');
    }
    else {
        res.end(`
        <h1>Oops</h1>
        <p>We are unable to load that page</p>
        <a href="/">Back to home</a>
    `);
    }
});
server.listen(5000);