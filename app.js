const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.static('public'));
app.use(cors());

// 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: process.env.AWS_RDS_HOST,
  user: process.env.AWS_RDS_USERNAME,
  password: process.env.AWS_RDS_PASSWORD,
  database: process.env.AWS_RDS_DATABASE
});

connection.connect((err) => {
  if (err) {
    console.error('DB 연결 실패:', err.stack);
    return;
  }
  console.log('DB 연결 성공!');
});

// 운세 가져오기 API
app.get('/api/fortune', (req, res) => {
  const query = 'SELECT message FROM fortunes ORDER BY RAND() LIMIT 1';
  connection.query(query, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: '데이터를 가져오지 못했습니다.' });
    } else {
      res.json({ message: results[0].message });
    }
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});
