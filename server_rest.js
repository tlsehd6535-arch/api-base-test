import express from 'express';
const app = express();
app.use(express.json());

app.get('/users', (req, res) => {
    res.json([{ id: 1, name: 'SHIN'}, { id: 2, name:'KIM'}]);
});
// 2. 특정 사용자 조회 (GET)
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ id: userId, name: `User ${userId}` });
});

// 3. 새 사용자 추가 (POST)
app.post('/users', (req, res) => {
  const newUser = req.body; // 클라이언트가 보낸 데이터
  res.status(201).json({ message: "생성 완료", data: newUser });
});

// 4. 사용자 정보 수정 (PATCH)
app.patch('/users/:id', (req, res) => {
  res.json({ message: `${req.params.id}번 사용자 수정 완료` });
});

// 5. 사용자 삭제 (DELETE)
app.delete('/users/:id', (req, res) => {
  res.json({ message: `${req.params.id}번 사용자 삭제 완료` });
});

app.listen(4004, () => console.log("REST API Server Running!"));