const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8081 });

// 클라이언트 연결 시 실행되는 콜백 함수
wss.on('connection', (ws) => {
  console.log('새로운 클라이언트가 연결되었습니다.');

  // 클라이언트로부터 메시지를 수신하면 실행되는 콜백 함수
  ws.on('message', (message) => {
    console.log(`클라이언트로부터 수신한 메시지: ${message}`);
    
    // 클라이언트에게 응답 메시지 전송
    ws.send(`서버로부터의 응답: ${message}`);
  });

  // 클라이언트 연결 종료 시 실행되는 콜백 함수
  ws.on('close', () => {
    console.log('클라이언트와의 연결이 종료되었습니다.');
  });
});

console.log('WebSocket 서버가 8081 포트에서 실행 중입니다.');