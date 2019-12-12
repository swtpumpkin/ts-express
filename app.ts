import express from 'express'

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

module.exports = app.listen(port, () => console.log(`${port} Server start!`));
