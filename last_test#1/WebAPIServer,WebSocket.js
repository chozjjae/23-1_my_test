const express = require('express');
const app = express();

// API 엔드포인트 정의
app.get('/api/users', (req, res) => {
     // 사용자 목록 반환
  res.json({ users: [...users] });
});

// 서버 시작
app.listen(8080, () => {
    console.log('API server is running on port 8080');
  });

  //test