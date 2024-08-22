const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Conectando ao MongoDB
mongoose.connect('mongodb://localhost:27017/checkins', {
  }).then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
  
  // Modelo do Mongoose
  const checkInSchema = new mongoose.Schema({
    activity: String,
    date: String,
    timeSpent: String,
  });
  
  const CheckIn = mongoose.model('CheckIn', checkInSchema);

// Rota para obter todos os check-ins
app.get('/check-ins', async (req, res) => {
    const checkIns = await CheckIn.find();
    res.json(checkIns);
  });
  
  app.post('/check-ins', async (req, res) => {
    const newCheckIn = new CheckIn(req.body);
    await newCheckIn.save();
    res.json(newCheckIn);
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });