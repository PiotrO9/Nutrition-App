const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // Choose a port for your backend

app.use(bodyParser.json());

// Define your API routes here
app.get('/api/data', (req, res) => {
  res.json({ message: 'Backend API is working!' });
});

app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});