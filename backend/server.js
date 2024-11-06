const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Olá aqui é o backend!');
});

app.listen(port, () => {
  console.log(`Backend server rodando em http://localhost:${port}`);
});