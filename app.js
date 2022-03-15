const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('INDEX');
});
app.get('*', (req, res) => {
  res.status(404).send('PAGE NOT FOUND');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});