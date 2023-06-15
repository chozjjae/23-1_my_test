const http = require('http');

// HTTP 서버 생성 및 요청과 응답 처리
const server = http.createServer((req, res) => {
  // HTTP 응답 상태 코드와 헤더 설정
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // 응답으로 보낼 메시지 설정
  res.end('Hello, World!');
});

// 서버를 지정한 포트와 호스트로 바인딩하고 대기
server.listen(8000, 'localhost', () => {
  console.log('Server running at http://localhost:8000/');
});