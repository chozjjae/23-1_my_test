//Web API Server
const express = require('express');
const app = express();
const port = 8080;
const WebSocket = require('ws');

// 라우트 정의
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`); //포트는 8080
});