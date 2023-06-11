//Web API Server
const express = require('express');
const app = express();

// API 엔드포인트 정의
app.get('/api/users', (req, res) => {
  // 사용자 목록 반환
  res.json({ users: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }] });
});

// 서버 시작
app.listen(8080, () => {
  console.log('API server is running on port 8080');
});


//Web Socket
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8081 });

wss.on('connection', (ws) => {
  console.log('WebSocket client connected');

  ws.on('message', (message) => {
    console.log(`Received message from WebSocket client: ${message}`);

    // 클라이언트에게 응답 보내기
    ws.send(`Response message from WebSocket server: ${message}`);
  });

  ws.on('close', () => {
    console.log('WebSocket client disconnected');
  });
});

console.log('WebSocket server is running on port 8081');

//간단한 클라이언트 개발
const socket = new WebSocket('ws://localhost:8081');