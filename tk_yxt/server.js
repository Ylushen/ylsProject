const express = require('express'); // 引入express
const app = express(); // 实例化express

app.use(express.static('dist'));
app.listen('3001', () => {
  console.log('监听端口 3001');
});
