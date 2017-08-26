const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
  res.send('hello world');
});

app.use('/', express.static('dist'));

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
