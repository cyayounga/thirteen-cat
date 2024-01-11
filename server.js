const express = require('express');
const app = express();
const port = 8080;
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/json', (req, res) => {
    res.sendFile(__dirname + '/update.json');
});

app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});