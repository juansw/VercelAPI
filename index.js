const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Vercel!');
});

app.get('/api', (req, res) => {
  res.json({ message: 'This is an API endpoint' });
});

// Export the Express app for Vercel to use
module.exports = app;