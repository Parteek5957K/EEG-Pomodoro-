const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const connectToMongo = require('./db'); // Import the connection function

// Connect to MongoDB
connectToMongo(); // Call this before app.listen

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/auth', require('./routes/Auth'));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});