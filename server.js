const http = require('http');
const fs = require('fs');

fs.writeFileSync('welcome.txt', 'Hello Node');
const data = fs.readFileSync('welcome.txt', 'utf8');
console.log(data);

fs.writeFileSync('hello.txt', 'Hello world');
const hello = fs.readFileSync('hello.txt', 'utf8');
console.log(hello);

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello Node!!!!</h1>\n');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
