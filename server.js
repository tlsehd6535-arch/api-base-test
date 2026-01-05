import express from 'express';

const app = express();
const PORT = 4004; // 어디방

// GET / 요청이 오면
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/data', (req, res) => {
  res.send('data~');
});

app.get('/get_test', (req, res) => {
  res.send('test');
});

app.get('/dongbin', (req, res) => {
  res.send('SHIN');
});


// 서버 실행
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
