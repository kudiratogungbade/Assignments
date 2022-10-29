const http = require('http');
const fs = require('fs');
const port = 3000;
const server = http.createServer((req, res) => {
console.log(req.url, req.method);
console.log(req.url)
//set header content type
res.setHeader('Content-Type', 'text/html');
let route = './public/';
switch (req.url) {
case '/home':
route += 'home.html';
break;
case '/contact':
route += 'contact.html';
break;
case '/about':
route += 'about.html';
break;
}
fs.readFile(route, (err, data) => {
if (err) {
console.log(err)
res.end()
} else {
res.end(data);
}
})
})
server.listen(3000, 'localhost', () => {
console.log(`listening on  http://localhost:${port}/home`)
});
